import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { BridgeBlueprint } from "@/components/site/BridgeBlueprint";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

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
        <div className="absolute right-0 top-0 h-full w-full md:w-[65%] pointer-events-none">
          <BridgeBlueprint className="h-full w-full opacity-[0.13]" />
        </div>
        <div className="absolute inset-y-0 right-1/2 left-0 bg-gradient-to-r from-background via-background/80 to-transparent md:right-1/3 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 min-h-[calc(100vh-5rem)] flex items-center py-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-8 text-accent text-xs tracking-[0.32em] uppercase">
                <span className="h-px w-10 bg-accent" />
                Consultores Especializados
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance text-foreground">
                Las ideas no faltan.{" "}
                <span className="italic text-accent">La ejecución, sí.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                Consultores especializados en transformación organizacional con foco
                en resultados reales y medibles.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/enfoque"
                  className="group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all shadow-gold-glow"
                >
                  Conocé nuestro enfoque
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
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-accent/60 text-[10px] tracking-[0.4em] uppercase animate-pulse">
          ↓ Continuá
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="relative py-24 md:py-32 border-t border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="El Diagnóstico"
              title="El verdadero desafío no está en la estrategia."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-sm border border-destructive/30 bg-card/40 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 border border-destructive/30">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">El Problema</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  El estancamiento no proviene de la falta de estrategias brillantes.
                  El verdadero desafío es la falta de{" "}
                  <span className="text-foreground font-medium">tracción operativa y financiera</span>.
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
                  resultados reales.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA hacia secciones */}
      <section className="relative py-24 md:py-32 border-t border-accent/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <BridgeBlueprint variant="compact" className="w-[80%] max-w-2xl opacity-[0.08]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="El Estándar Enlace"
              title="Servicio 100% socios. Implementación en campo."
              description="Cada proyecto es ejecutado de principio a fin por los socios fundadores. Sin delegación en perfiles junior, sin plantillas estandarizadas."
              align="center"
            />
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
