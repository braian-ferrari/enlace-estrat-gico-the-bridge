import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Columns3,
  TrendingDown,
  Users,
  Building2,
  ShieldCheck,
  Target,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

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

const left = [
  {
    icon: Columns3,
    text: "Organizaciones que necesitan ordenar, estabilizar y escalar.",
  },
  {
    icon: TrendingDown,
    text: "Reducción de costos y eficiencia de capital de trabajo.",
  },
  {
    icon: Users,
    text: "Transformación, profesionalización y cambio cultural.",
  },
];

const right = [
  {
    icon: Building2,
    text: "Empresas en crisis operativa, financiera o de gobierno.",
  },
  {
    icon: ShieldCheck,
    text: "Procesos de turnaround (rescate corporativo).",
  },
  {
    icon: Target,
    text: "Proyectos de expansión: start-ups, take-overs, integración post adquisición.",
  },
];

type Ctx = { icon: typeof Columns3; text: string };

function SpokeCard({ item, side }: { item: Ctx; side: "left" | "right" }) {
  return (
    <article
      className={`group flex items-center gap-4 rounded-sm border border-accent/20 bg-card/60 p-5 transition-all hover:border-accent/60 hover:shadow-gold-glow ${
        side === "left" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
        <item.icon className="h-5 w-5 text-accent" />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-wide">
        {item.text}
      </p>
    </article>
  );
}

function HubNode() {
  return (
    <div className="relative flex items-center justify-center">
      {/* concentric rings */}
      <div className="absolute h-44 w-44 rounded-full border border-accent/15" />
      <div className="absolute h-56 w-56 rounded-full border border-accent/10" />
      <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-accent/50 bg-gradient-navy shadow-gold-glow text-center">
        <span className="font-serif text-5xl text-accent leading-none">E</span>
        <span className="mt-2 text-[9px] tracking-[0.25em] uppercase text-muted-foreground px-3 leading-tight">
          Ecosistema de Intervención
        </span>
      </div>
    </div>
  );
}

function EcosistemasPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 border-b border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Ecosistemas de Intervención"
              title="Contextos críticos de actuación."
              description="Intervenimos donde la complejidad exige ejecución. Estos son los seis ecosistemas en los que generamos tracción real."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* Left contexts */}
            <div className="order-2 lg:order-1 flex flex-col gap-5">
              {left.map((item, i) => (
                <Reveal key={item.text} delay={i * 90}>
                  <SpokeCard item={item} side="left" />
                </Reveal>
              ))}
            </div>

            {/* Hub */}
            <Reveal className="order-1 lg:order-2" delay={120}>
              <HubNode />
            </Reveal>

            {/* Right contexts */}
            <div className="order-3 flex flex-col gap-5">
              {right.map((item, i) => (
                <Reveal key={item.text} delay={i * 90}>
                  <SpokeCard item={item} side="right" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

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
