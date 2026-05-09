import { createFileRoute, Link } from "@tanstack/react-router";
import {
  TrendingUp, Users, Building2, Cog, Wallet,
  ShieldAlert, Search, Landmark, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Transformación y crecimiento, eficiencia y rescate corporativo, gobernanza y control. Soluciones quirúrgicas para situaciones complejas.",
      },
      { property: "og:title", content: "Servicios — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "Diagnóstico, profesionalización, expansión, reingeniería de procesos, reducción de costos, riesgos, auditoría interna y advisory board.",
      },
    ],
  }),
  component: ServiciosPage,
});

const grupos = [
  {
    eyebrow: "Transformación y Crecimiento",
    title: "Construir tracción en cada etapa.",
    items: [
      { icon: TrendingUp, title: "Diagnóstico y Plan de Acción", body: "Lectura aguda del estado de la organización y hoja de ruta priorizada para destrabar el crecimiento." },
      { icon: Users, title: "Profesionalización & Recambio Generacional", body: "Transición ordenada del management, mentoría y formación del talento que sostendrá la próxima etapa." },
      { icon: Building2, title: "Proyectos de Expansión", body: "Diseño e implementación de modelos escalables: nuevos mercados, líneas de negocio y estructuras organizacionales." },
    ],
  },
  {
    eyebrow: "Eficiencia y Rescate Corporativo",
    title: "Estabilizar y liberar caja.",
    items: [
      { icon: Cog, title: "Reingeniería de Procesos", body: "Rediseño operativo end-to-end con foco en disciplina de ejecución y métricas claras." },
      { icon: Wallet, title: "Reducción de Costos y Mejora del Capital de Trabajo", body: "Optimización del WC, gestión de ciclo de caja y rentabilidad por unidad de negocio." },
    ],
  },
  {
    eyebrow: "Gobernanza y Control",
    title: "Decisiones con visión y respaldo.",
    items: [
      { icon: ShieldAlert, title: "Análisis de Riesgos", body: "Identificación, cuantificación y mitigación proactiva de riesgos operacionales, financieros y estratégicos." },
      { icon: Search, title: "Auditoría Interna", body: "Diseño e implementación de sistemas de control interno y cumplimiento adaptados a la realidad de la empresa." },
      { icon: Landmark, title: "Advisory Board", body: "Acompañamiento de directorio con experiencia especializada para decisiones en entornos complejos." },
    ],
  },
] as const;

function ServiciosPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 border-b border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Servicios"
              title="Tres áreas. Una sola lógica: ejecución."
              description="Cada servicio se entrega con socios al frente, equipos delgados y una disciplina de implementación medible en el resultado del negocio."
            />
          </Reveal>
        </div>
      </section>

      {grupos.map((g, gi) => (
        <section
          key={g.eyebrow}
          className={`py-20 md:py-24 ${gi % 2 === 1 ? "bg-card/20 border-y border-accent/10" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="flex items-baseline gap-6 flex-wrap mb-12">
                <span className="font-serif text-accent text-2xl">0{gi + 1}</span>
                <div>
                  <div className="text-xs tracking-[0.32em] uppercase text-accent mb-2">
                    {g.eyebrow}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance leading-tight">
                    {g.title}
                  </h2>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <article className="group h-full rounded-sm border border-accent/20 bg-card/60 p-7 transition-all hover:border-accent/60 hover:-translate-y-1 hover:shadow-gold-glow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 border border-accent/30 mb-5 group-hover:bg-accent/20 transition-colors">
                      <s.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 border-t border-accent/10">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground text-balance leading-snug">
              "Soluciones quirúrgicas para situaciones complejas."
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to="/contacto"
              className="mt-10 group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
            >
              Conversemos sobre tu caso
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
