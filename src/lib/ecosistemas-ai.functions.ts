import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { graphCatalog } from "@/data/ecosistemas-graph";

export type Recommendation = {
  summary: string;
  items: { id: string; reason: string }[];
};

const schema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "items"],
  properties: {
    summary: { type: "string" },
    items: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["id", "reason"],
        properties: { id: { type: "string" }, reason: { type: "string" } },
      },
    },
  },
};

export const recommendEcosistemas = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ challenge: z.string().trim().min(10).max(1500) }).parse(d))
  .handler(async ({ data }): Promise<Recommendation> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("El asistente no está configurado.");

    const catalog = graphCatalog
      .map((e) => `${e.id} | ${e.kind}${e.parent ? ` (de ${e.parent})` : ""} | ${e.label}${e.desc ? ` — ${e.desc}` : ""}`)
      .join("\n");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low", summary: "auto" },
        include: ["reasoning.encrypted_content"],
        text: { format: { type: "json_schema", name: "recomendacion", strict: true, schema } },
        input: [
          {
            role: "system",
            content:
              "Sos consultor senior de Enlace Estratégico (Argentina). Dado el desafío de una empresa, elegí entre 3 y 5 nodos MÁS relevantes del catálogo (servicios, líneas de trabajo, enfoque o frases frecuentes que reflejen su situación). Usá solo ids exactos del catálogo. 'summary': 2 frases en español rioplatense, profesional. 'reason': 1 frase por nodo explicando la relación con el desafío. Ordená por relevancia.\n\nCATÁLOGO (id | tipo | nombre — descripción):\n" +
              catalog,
          },
          { role: "user", content: data.challenge },
        ],
      }),
    });

    if (!res.ok || !res.body) {
      if (res.status === 429) throw new Error("Hay mucha demanda en este momento. Probá de nuevo en unos minutos.");
      if (res.status === 402 || res.status === 403) throw new Error("El asistente no está disponible en este momento.");
      throw new Error("No pudimos generar la recomendación.");
    }

    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    let text = "";
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const ev = JSON.parse(payload);
          if (ev.type === "response.output_text.delta") text += ev.delta;
          if (ev.type === "response.failed" || ev.type === "error") throw new Error("gen");
        } catch (e) {
          if (e instanceof Error && e.message === "gen") throw new Error("No pudimos generar la recomendación.");
        }
      }
    }

    let parsed: Recommendation;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("No pudimos generar la recomendación.");
    }
    const valid = new Set(graphCatalog.map((e) => e.id));
    return { summary: parsed.summary, items: parsed.items.filter((i) => valid.has(i.id)).slice(0, 5) };
  });
