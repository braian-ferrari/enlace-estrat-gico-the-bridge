import { useState, type RefObject } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Compass, X } from "lucide-react";
import { recommendEcosistemas, type Recommendation } from "@/lib/ecosistemas-ai.functions";
import { graphCatalog } from "@/data/ecosistemas-graph";

const byId = new Map(graphCatalog.map((e) => [e.id, e]));

export function ChallengeAdvisor({ frameRef }: { frameRef: RefObject<HTMLIFrameElement | null> }) {
  const recommend = useServerFn(recommendEcosistemas);
  const [challenge, setChallenge] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Recommendation | null>(null);

  const post = (msg: unknown) =>
    frameRef.current?.contentWindow?.postMessage(msg, window.location.origin);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (challenge.trim().length < 10) {
      setError("Contanos un poco más (al menos 10 caracteres).");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const r = await recommend({ data: { challenge } });
      setResult(r);
      post({ type: "ee-recommend", ids: r.items.map((i) => i.id) });
      frameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos generar la recomendación.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl border border-accent/30 bg-card/40 rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 text-accent">
        <Compass className="h-5 w-5" aria-hidden />
        <h2 className="font-serif text-xl md:text-2xl text-foreground">¿Cuál es el desafío de tu empresa?</h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Describilo en pocas líneas y te mostramos en el mapa los servicios y relaciones más relevantes.
      </p>
      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <label htmlFor="challenge" className="sr-only">Desafío de tu empresa</label>
        <textarea
          id="challenge"
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          maxLength={1500}
          rows={4}
          placeholder="Ej.: Vendemos bien pero nunca tenemos caja y la estructura creció más que la facturación."
          className="w-full rounded-sm border border-accent/20 bg-background/60 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-gradient-gold text-accent-foreground px-6 py-3 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
            {loading ? "Analizando…" : "Recomendar"}
          </button>
          {result && (
            <button
              type="button"
              onClick={() => { setResult(null); post({ type: "ee-clear" }); }}
              className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
            >
              <X className="h-4 w-4" aria-hidden /> Limpiar
            </button>
          )}
        </div>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      </form>

      <div aria-live="polite">
        {result && (
          <div className="mt-6 border-t border-accent/15 pt-5">
            <p className="font-serif italic text-foreground">{result.summary}</p>
            <ul className="mt-4 space-y-3">
              {result.items.map((it) => {
                const entry = byId.get(it.id);
                if (!entry) return null;
                return (
                  <li key={it.id}>
                    <button
                      type="button"
                      onClick={() => post({ type: "ee-select", id: it.id })}
                      className="w-full text-left rounded-sm border border-accent/15 p-3 hover:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-accent">{entry.kind}</span>
                      <span className="block text-sm font-medium text-foreground">{entry.label}</span>
                      <span className="block text-xs text-muted-foreground mt-1">{it.reason}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
