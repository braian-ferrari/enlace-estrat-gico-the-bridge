import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, TrendingUp, Cog, Wallet,
  ShieldAlert, BarChart3, Landmark, ArrowRight,
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
          "Profesionalización, expansión, reingeniería de procesos, reducción de costos, riesgos y auditoría, contabilidad estratégica y advisory board. Socios al frente y resultados medibles.",
      },
      { property: "og:title", content: "Servicios — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "Siete servicios entregados con socios al frente, equipos delgados y disciplina de implementación medible en el resultado del negocio.",
      },
    ],
  }),
  component: ServiciosPage,
});

const servicios = [
  {
    icon: Users,
    title: "Profesionalización y Recambio Generacional",
    lead: "De la intuición a la estructura: asegurar la continuidad y el crecimiento de su legado.",
    items: [
      { k: "Formalización de la gestión", v: "Transformamos procesos improvisados en un modelo de negocio institucional, combinando tecnología aplicada, finanzas sanas y claridad estratégica." },
      { k: "Gobierno corporativo", v: "Diseñamos estructuras claras y separamos roles clave para que delegar la operación sea seguro, sostenible y eficiente." },
      { k: "Transición y sucesión", v: "Guiamos el recambio generacional mediante mentoría y formación del nuevo talento directivo, garantizando que el negocio trascienda sin perder estabilidad." },
    ],
  },
  {
    icon: TrendingUp,
    title: "Proyectos de Expansión",
    lead: "Modelos escalables para conquistar nuevos mercados.",
    items: [
      { k: "Crecimiento estructurado", v: "Diseñamos e implementamos modelos financieros y organizacionales aptos para el desarrollo de nuevas líneas de negocio o mercados geográficos." },
      { k: "Estrategia en Startups y M&A", v: "Ofrecemos asesoramiento integral y acompañamiento estratégico tanto en el lanzamiento de startups como en procesos de fusiones y adquisiciones (Take-Overs)." },
    ],
  },
  {
    icon: Cog,
    title: "Reingeniería de Procesos y Estructuras",
    lead: "Optimización y modernización de áreas clave.",
    items: [
      { k: "Eficiencia con Inteligencia Artificial", v: "Rediseñamos procesos e implementamos flujos de trabajo híbridos, integrando agentes de IA según la madurez digital de la empresa para maximizar la productividad." },
      { k: "Estructura a medida", v: "Reestructuramos, mejoramos o creamos nuevas áreas funcionales alineadas con los objetivos actuales del negocio." },
    ],
  },
  {
    icon: Wallet,
    title: "Reducción de Costos y Eficiencia del Capital de Trabajo",
    lead: "Maximizar la rentabilidad protegiendo su liquidez.",
    items: [
      { k: "Rentabilidad inteligente", v: "Analizamos a fondo los costos, precios y márgenes por producto o unidad de negocio para identificar fugas de dinero." },
      { k: "Eficiencia sostenible", v: "Reducimos costos mediante la digitalización y automatización de tareas. Alineamos las decisiones operativas con la gestión del capital de trabajo para multiplicar resultados sin generar tensiones de caja." },
    ],
  },
  {
    icon: ShieldAlert,
    title: "Análisis de Riesgos y Auditoría Interna",
    lead: "Blindamos el valor de su compañía ante un entorno incierto.",
    items: [
      { k: "Gestión de riesgos", v: "Diagnosticamos, mapeamos y monitoreamos amenazas potenciales, transformando la prevención en resiliencia y ventaja competitiva." },
      { k: "Auditoría interna estratégica", v: "Implementamos el área de auditoría como un aliado clave del negocio, utilizando enfoques ágiles y análisis continuo para asegurar el cumplimiento y protección de los activos." },
    ],
  },
  {
    icon: BarChart3,
    title: "Contabilidad Estratégica y Reportes de Gestión",
    lead: "Usar los números para escribir el futuro, no para leer el pasado.",
    items: [
      { k: "Tableros de control (KPIs)", v: "Diseñamos reportes de gestión gerencial y herramientas visuales para que la toma de decisiones se base en datos en tiempo real." },
      { k: "Soporte continuo", v: "Brindamos asesoramiento administrativo y contable constante, convirtiendo los datos regulatorios en insights de negocio." },
    ],
  },
  {
    icon: Landmark,
    title: "Advisory Board (Consejo Asesor)",
    lead: "Una mirada externa experta para mantener el rumbo.",
    items: [
      { k: "Disciplina ejecutiva", v: "Participamos activamente en sus revisiones estratégicas, aportando una visión objetiva y corporativa." },
      { k: "Mentoría y control", v: "Monitoreamos los KPIs críticos del negocio y brindamos mentoría a los líderes de la organización para asegurar el cumplimiento de metas." },
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
              title="Nuestros Servicios"
              description="Cada servicio se entrega con socios al frente, equipos delgados y una disciplina de implementación medible en el resultado del negocio."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <article className="group h-full flex flex-col rounded-sm border border-accent/20 bg-card/60 p-7 transition-all hover:border-accent/60 hover:-translate-y-1 hover:shadow-gold-glow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
                      <s.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-serif text-accent/70 text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm italic text-accent mb-5 leading-relaxed">{s.lead}</p>
                  <ul className="space-y-4">
                    {s.items.map((it) => (
                      <li key={it.k} className="text-sm leading-relaxed">
                        <span className="block text-foreground font-medium mb-0.5">
                          {it.k}
                        </span>
                        <span className="text-muted-foreground">{it.v}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
