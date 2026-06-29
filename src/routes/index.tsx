import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroBridgesAsset from "@/assets/hero-bridges.png.asset.json";

const heroBridges = heroBridgesAsset.url;

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
    <section className="relative overflow-hidden bg-gradient-navy">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        {/* HEADLINE */}
        <Reveal>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance text-center text-foreground uppercase tracking-wide">
            Las ideas no faltan.
            <br />
            La ejecución, sí.
          </h1>
        </Reveal>

        {/* diamond ornament */}
        <Reveal delay={100}>
          <div className="mt-6 flex items-center justify-center">
            <span className="h-px w-16 bg-accent/40" />
            <span className="mx-3 h-2 w-2 rotate-45 bg-accent" />
            <span className="h-px w-16 bg-accent/40" />
          </div>
        </Reveal>

        {/* HERO IMAGE */}
        <Reveal delay={200}>
          <div className="mt-10 md:mt-14">
            <img
              src={heroBridges}
              alt="Del plano a la obra: la transformación de la idea a la ejecución"
              width={1536}
              height={640}
              className="w-full h-auto rounded-sm"
            />
          </div>
        </Reveal>

        {/* PROBLEMA / SOLUCIÓN */}
        <Reveal delay={300}>
          <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-2 md:gap-0">
            <article className="md:pr-12">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground tracking-[0.15em] uppercase">
                  El Problema
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                En nuestra experiencia corporativa, el estancamiento no proviene de la falta
                de estrategias brillantes o planes de negocio. El verdadero desafío operativo
                y financiero es la falta de tracción.
              </p>
            </article>

            <article className="md:border-l md:border-accent/20 md:pl-12">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground tracking-[0.15em] uppercase">
                  La Solución
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Toda nuestra energía se concentra en cruzar el puente: asegurar que los
                cambios estructurales se concreten y generen resultados reales y medibles.
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
