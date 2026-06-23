import { createFileRoute, Link } from "@tanstack/react-router";
import { User, FileText, Landmark, Target, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/enfoque")({
  head: () => ({
    meta: [
      { title: "Nuestro Diferencial — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Un paradigma diferente de intervención: involucramiento de socios, implementación en campo, transferencia de know-how y soluciones quirúrgicas frente a la consultoría tradicional.",
      },
      { property: "og:title", content: "Nuestro Diferencial — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "Los pilares de nuestra propuesta de valor: foco en ejecución, transferencia de know-how, servicio 100% socios e independencia objetiva.",
      },
    ],
  }),
  component: DiferencialPage,
});

const rows = [
  {
    icon: User,
    dim: "El Equipo",
    trad: "Estructura piramidal delegada en perfiles Junior.",
    est: "Involucramiento absoluto de nuestros socios.",
  },
  {
    icon: FileText,
    dim: "El Entregable",
    trad: "Informes teóricos y manuales de recomendaciones.",
    est: "Implementación en campo y tracción de resultados.",
  },
  {
    icon: Landmark,
    dim: "El Legado",
    trad: "Dependencia del consultor para la continuidad.",
    est: "Transferencia efectiva de know-how al talento interno.",
  },
  {
    icon: Target,
    dim: "El Enfoque",
    trad: "Plantillas estandarizadas.",
    est: "Soluciones quirúrgicas para resolver situaciones complejas.",
  },
];

const pilares = [
  {
    title: "Foco en Ejecución",
    body: "Actuamos como un equipo externo pero con absoluta inmersión operativa. Mantenemos objetividad para resolver crisis económico/financieras, procesos de expansión, integración, profesionalización, cambio cultural y traspasos generacionales.",
  },
  {
    title: "Transferencia de Know-How",
    body: "No generamos dependencia. Incorporamos talento, aportamos trayectoria y capacitamos al equipo interno para garantizar la continuidad del éxito.",
  },
  {
    title: "Servicio 100% Socios",
    body: "Garantizamos compromiso directo: cada proyecto es ejecutado de principio a fin por sus socios fundadores, sin delegación en perfiles junior o terceros.",
  },
  {
    title: "Independencia Objetiva",
    body: "Un Board Advisory que aporta visión estratégica y experiencia especializada para fortalecer la toma de decisiones en entornos complejos.",
  },
];

function ColumnIcon() {
  return (
    <svg
      viewBox="0 0 80 110"
      className="h-20 w-auto text-accent"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* capital */}
      <line x1="14" y1="22" x2="66" y2="22" strokeWidth="1.6" />
      <rect x="18" y="14" width="44" height="8" strokeWidth="1.2" />
      {/* shaft with flutes */}
      <line x1="22" y1="22" x2="22" y2="90" strokeWidth="1.4" />
      <line x1="58" y1="22" x2="58" y2="90" strokeWidth="1.4" />
      {[31, 40, 49].map((x) => (
        <line key={x} x1={x} y1="24" x2={x} y2="88" strokeWidth="0.7" opacity="0.55" />
      ))}
      {/* base */}
      <line x1="14" y1="90" x2="66" y2="90" strokeWidth="1.6" />
      <rect x="10" y="90" width="60" height="9" strokeWidth="1.2" />
    </svg>
  );
}

function DiferencialPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 border-b border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Nuestro Diferencial"
              title="Un paradigma diferente de intervención."
              description="Una comparación honesta entre el modelo convencional y el estándar que aplicamos en cada proyecto."
            />
          </Reveal>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-accent/20">
              {/* Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-card/60 border-b border-accent/20">
                <div className="hidden md:block p-6 text-xs tracking-[0.3em] uppercase text-muted-foreground" />
                <div className="p-6 text-xs tracking-[0.3em] uppercase text-muted-foreground border-t md:border-t-0 md:border-l border-accent/15">
                  Consultoría Tradicional
                </div>
                <div className="p-6 text-xs tracking-[0.3em] uppercase text-accent border-t md:border-t-0 md:border-l border-accent/30 bg-accent/5">
                  El Estándar Enlace Estratégico
                </div>
              </div>
              {/* Rows */}
              {rows.map((r, i) => (
                <div
                  key={r.dim}
                  className={`grid grid-cols-1 md:grid-cols-3 ${i < rows.length - 1 ? "border-b border-accent/15" : ""}`}
                >
                  <div className="flex items-center gap-3 p-6 md:p-7 bg-card/30">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/30">
                      <r.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-serif text-lg text-foreground uppercase tracking-wide">
                      {r.dim}
                    </span>
                  </div>
                  <div className="p-6 md:p-7 text-muted-foreground leading-relaxed border-t md:border-t-0 md:border-l border-accent/15">
                    {r.trad}
                  </div>
                  <div className="p-6 md:p-7 text-foreground leading-relaxed border-t md:border-t-0 md:border-l border-accent/30 bg-accent/[0.04] relative">
                    <span className="absolute left-0 top-0 bottom-0 w-px bg-accent/60 hidden md:block" />
                    {r.est}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 md:py-28 border-t border-accent/10 bg-card/20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Propuesta de Valor"
              title="Los pilares de nuestra propuesta de valor."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="group h-full rounded-sm border border-accent/20 bg-card/60 p-7 text-center transition-all hover:border-accent/60 hover:-translate-y-1 hover:shadow-gold-glow">
                  <div className="flex justify-center mb-6">
                    <ColumnIcon />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-3 uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 flex justify-center">
              <Link
                to="/ecosistemas"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
              >
                Ecosistemas de intervención
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
