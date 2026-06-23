import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { TwoBridges, BridgeBanner } from "@/components/site/TwoBridges";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enlace Estratégico — Las ideas no faltan. La ejecución, sí." },
      {
        name: "description",
        content:
          "Consultores especializados en transformación organizacional. Aseguramos que los cambios estructurales se concreten y generen resultados reales.",
      },
      { property: "og:title", content: "Enlace Estratégico — Consultores Especializados" },
      {
        property: "og:description",
        content:
          "Consultoría boutique con foco en ejecución, transferencia de know-how y servicio 100% socios.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-navy" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center py-20">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-8 text-accent text-xs tracking-[0.32em] uppercase">
              <span className="h-px w-10 bg-accent" />
              Consultores Especializados
              <span className="h-px w-10 bg-accent" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance text-foreground uppercase">
              Las ideas no faltan.{" "}
              <span className="italic text-accent normal-case">La ejecución, sí.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 w-full max-w-3xl text-accent">
              <TwoBridges />
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/enfoque"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all shadow-gold-glow"
              >
                Conocé nuestro diferencial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center border border-accent/40 text-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:bg-card transition-colors"
              >
                Conversemos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="relative py-24 md:py-32 border-t border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-sm border border-destructive/30 bg-card/40 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 border border-destructive/30">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">El Problema</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  En nuestra experiencia corporativa, el estancamiento no proviene de la
                  falta de estrategias brillantes o planes de negocio. El verdadero
                  desafío operativo y financiero es la falta de{" "}
                  <span className="text-foreground font-medium">tracción</span>.
                </p>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="h-full rounded-sm border border-accent/40 bg-card p-8 md:p-10 shadow-gold-glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 border border-accent/40">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">La Solución</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Toda nuestra energía se concentra en{" "}
                  <span className="text-accent font-medium">cruzar el puente</span>:
                  asegurar que los cambios estructurales se concreten y generen
                  resultados reales y medibles.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="relative py-20 md:py-28 border-t border-accent/10 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-[0.18] pointer-events-none">
          <BridgeBanner />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-[1.15]">
              Construyendo el <span className="text-accent">Puente</span> hacia la{" "}
              <span className="text-accent">Excelencia Operativa</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/servicios"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/metodologia"
                className="inline-flex items-center justify-center border border-accent/40 text-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:bg-card transition-colors"
              >
                Nuestra metodología
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
