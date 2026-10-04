import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/ecosistemas")({
  head: () => ({
    meta: [
      { title: "Ecosistemas de Intervención — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Contextos críticos de actuación: estabilización y escala, eficiencia de capital, transformación cultural, crisis operativa, turnaround y proyectos de expansión.",
      },
      { property: "og:title", content: "Ecosistemas de Intervención — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "Seis contextos donde nuestra intervención genera tracción real: el ecosistema de actuación de Enlace Estratégico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EcosistemasPage,
});

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-accent/70">
      <span className="h-px w-16 bg-accent/40" />
      <span className="rotate-45 inline-block h-1.5 w-1.5 border border-accent/70" />
      <span className="h-px w-16 bg-accent/40" />
    </div>
  );
}

function EcosistemasPage() {
  return (
    <section className="md:-mb-24 md:flex md:h-[calc(100svh-5rem)] md:min-h-[560px] md:flex-col md:overflow-hidden">
      {/* HEADER */}
      <div className="pt-24 pb-6 md:shrink-0 md:py-3">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <Reveal>
            <h1 className="font-serif text-3xl uppercase tracking-[0.12em] text-foreground leading-tight md:text-4xl">
              Contextos <span className="text-accent">Críticos</span> de Actuación
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 md:mt-2">
              <Ornament />
            </div>
          </Reveal>
        </div>
      </div>

      {/* MAPA INTERACTIVO */}
      <div className="py-8 md:min-h-0 md:flex-1 md:py-3">
        <div className="mx-auto h-full max-w-7xl px-3 md:px-6">
          <Reveal className="h-full">
            <iframe
              src="/ecosistemas-grafo.html"
              className="h-[85vh] w-full rounded-xl border-0 md:h-full"
              title="Ecosistemas de Intervención"
            />
          </Reveal>
        </div>
      </div>

      {/* CLOSING */}
      <div className="border-t border-accent/10 bg-card/20 py-16 md:flex md:h-16 md:shrink-0 md:items-center md:py-0">
        <div className="mx-auto max-w-4xl px-5 text-center md:flex md:w-full md:items-center md:justify-between md:gap-5 md:px-8">
          <Reveal>
            <p className="font-serif italic text-2xl text-foreground text-balance leading-snug md:text-sm">
              "Donde otros ven complejidad, nosotros construimos el puente hacia la
              ejecución."
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/servicios"
              className="mt-10 group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all md:mt-0 md:px-4 md:py-2 md:text-[10px]"
            >
              Conocé nuestros servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
