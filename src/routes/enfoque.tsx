import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Settings2, Handshake, Eye, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BridgeBlueprint } from "@/components/site/BridgeBlueprint";

export const Route = createFileRoute("/enfoque")({
  head: () => ({
    meta: [
      { title: "Nuestro Enfoque — Enlace Estratégico" },
      {
        name: "description",
        content:
          "El estándar Enlace Estratégico vs. la consultoría tradicional: involucramiento de socios, implementación en campo, transferencia de know-how y soluciones quirúrgicas.",
      },
      { property: "og:title", content: "Nuestro Enfoque — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "Cuatro pilares de valor que diferencian nuestra consultoría: ejecución, know-how, servicio 100% socios e independencia objetiva.",
      },
    ],
  }),
  component: EnfoquePage,
});

const rows = [
  { dim: "El Equipo", trad: "Estructura piramidal delegada en perfiles Junior", est: "Involucramiento absoluto de nuestros socios" },
  { dim: "El Entregable", trad: "Informes teóricos y manuales", est: "Implementación en campo y tracción de resultados" },
  { dim: "El Legado", trad: "Dependencia del consultor", est: "Transferencia efectiva de know-how al talento interno" },
  { dim: "El Enfoque", trad: "Plantillas estandarizadas", est: "Soluciones quirúrgicas para situaciones complejas" },
];

const pilares = [
  {
    icon: Target,
    title: "Foco en Ejecución",
    body: "Actuamos como equipo externo con absoluta inmersión operativa. Objetividad para resolver crisis, expansión, profesionalización y traspasos generacionales.",
  },
  {
    icon: Settings2,
    title: "Transferencia de Know-How",
    body: "No generamos dependencia. Incorporamos talento, aportamos trayectoria y capacitamos al equipo interno.",
  },
  {
    icon: Handshake,
    title: "Servicio 100% Socios",
    body: "Cada proyecto es ejecutado de principio a fin por los socios fundadores, sin delegación en perfiles junior.",
  },
  {
    icon: Eye,
    title: "Independencia Objetiva",
    body: "Board Advisory con visión estratégica y experiencia especializada para decisiones en entornos complejos.",
  },
];

function EnfoquePage() {
  return (
    <>
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-20 border-b border-accent/10 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-2/3 pointer-events-none">
          <BridgeBlueprint className="h-full w-full opacity-[0.07]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Nuestro Diferencial"
              title="Lo que nos distingue de la consultoría tradicional."
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
                <div className="hidden md:block p-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Dimensión
                </div>
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
                  <div className="p-6 md:p-7 font-serif text-lg text-foreground bg-card/30">
                    {r.dim}
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
              eyebrow="Pilares de Valor"
              title="Cuatro convicciones que guían cada proyecto."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="group h-full rounded-sm border border-accent/20 bg-card/60 p-7 transition-all hover:border-accent/60 hover:-translate-y-1 hover:shadow-gold-glow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 border border-accent/30 mb-6 group-hover:bg-accent/20 transition-colors">
                    <p.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 flex justify-center">
              <Link
                to="/servicios"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
              >
                Explorá nuestros servicios
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
