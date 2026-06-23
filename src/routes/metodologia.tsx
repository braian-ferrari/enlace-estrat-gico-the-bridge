import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Map, Hammer, Gauge, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodología — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Un proceso de cuatro etapas enfocado en la acción y en generar autonomía: diagnóstico profundo, definición estratégica, ejecución operativa y medición con autonomía.",
      },
      { property: "og:title", content: "Metodología — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "El camino hacia la eficiencia: diagnóstico, estrategia, ejecución en el terreno y autonomía sostenible para su empresa.",
      },
    ],
  }),
  component: MetodologiaPage,
});

const pasos = [
  {
    icon: Search,
    num: "01",
    title: "Diagnóstico Profundo",
    lead: "Entendemos dónde están para definir hacia dónde ir.",
    body: "Realizamos un análisis exhaustivo de la situación actual de su empresa. Identificamos cuellos de botella, fugas de rentabilidad y oportunidades ocultas. Un diagnóstico preciso es la única base sólida para trazar una hoja de ruta exitosa.",
  },
  {
    icon: Map,
    num: "02",
    title: "Definición Estratégica y Plan de Acción",
    lead: "Trazamos el mapa de ruta con metas claras.",
    body: "Establecemos objetivos financieros y operativos medibles. Diseñamos un plan de acción estructurado, cronogramas de trabajo y asignación de recursos, asegurando que cada paso tenga un propósito claro y alineado con la visión de los socios.",
  },
  {
    icon: Hammer,
    num: "03",
    title: "Ejecución Operativa",
    tag: "Nuestro Diferenciador",
    lead: "No solo aconsejamos, implementamos con ustedes en el terreno.",
    body: "Este es nuestro pilar fundamental. Nos involucramos de principio a fin, con los socios de la firma liderando la ejecución. Actuamos con absoluta inmersión operativa, como un equipo externo pero 100% integrado a su día a día. Construimos el puente entre la estrategia y los resultados reales.",
  },
  {
    icon: Gauge,
    num: "04",
    title: "Medición, Optimización y Autonomía",
    lead: "Monitoreamos el éxito y preparamos a su equipo para el futuro.",
    body: "Controlamos el cumplimiento de las metas mediante un riguroso seguimiento de KPIs. Nuestro enfoque está diseñado para no generar dependencia: capacitamos a su personal, profesionalizamos los mandos medios e incorporamos talento para garantizar la continuidad y la total autonomía del negocio.",
  },
];

function MetodologiaPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 border-b border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Metodología"
              title="Nuestra Metodología: El Camino hacia la Eficiencia"
              description="No creemos en las fórmulas genéricas ni en los reportes que se quedan en un cajón. Diseñamos un proceso de cuatro etapas enfocado en la acción y en generar autonomía para su empresa."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="relative flex flex-col gap-8">
            {/* connecting line */}
            <span className="absolute left-[27px] top-4 bottom-4 w-px bg-accent/20 hidden md:block" />
            {pasos.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <article className="group relative grid gap-5 md:grid-cols-[56px_1fr] rounded-sm border border-accent/20 bg-card/60 p-7 md:p-8 transition-all hover:border-accent/60 hover:shadow-gold-glow">
                  <div className="relative flex md:flex-col items-center gap-3 md:gap-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 border border-accent/40 group-hover:bg-accent/20 transition-colors z-10">
                      <p.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <span className="font-serif text-accent text-2xl">{p.num}</span>
                      <h3 className="font-serif text-2xl text-foreground">{p.title}</h3>
                      {p.tag && (
                        <span className="text-[10px] tracking-[0.2em] uppercase text-accent border border-accent/40 rounded-sm px-2 py-1">
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-base italic text-accent mb-3 leading-relaxed">{p.lead}</p>
                    <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-accent/10 bg-card/30">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground text-balance leading-snug">
              "Construimos el puente entre la estrategia y los resultados reales."
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/contacto"
              className="mt-12 group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
            >
              Iniciá la conversación
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
