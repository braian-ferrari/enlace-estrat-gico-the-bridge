import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ChallengeAdvisor } from "@/components/site/ChallengeAdvisor";

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
  const frameRef = useRef<HTMLIFrameElement>(null);
  return (
    <>
      {/* HEADER */}
      <section className="pt-24 md:pt-32 pb-6">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <Reveal>
            <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.12em] text-foreground leading-tight">
              Contextos <span className="text-accent">Críticos</span> de Actuación
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8">
              <Ornament />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ASESOR IA */}
      <section className="pb-4 px-5 md:px-8">
        <Reveal>
          <ChallengeAdvisor frameRef={frameRef} />
        </Reveal>
      </section>

      {/* MAPA INTERACTIVO */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-3 md:px-6">
          <Reveal>
            <iframe
              ref={frameRef}
              src="/ecosistemas-grafo.html"
              className="w-full h-[85vh] border-0 rounded-xl"
              title="Ecosistemas de Intervención"
            />
          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 md:py-20 border-t border-accent/10 bg-card/20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground text-balance leading-snug">
              "Donde otros ven complejidad, nosotros construimos el puente hacia la
              ejecución."
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/servicios"
              className="mt-10 group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
            >
              Conocé nuestros servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
