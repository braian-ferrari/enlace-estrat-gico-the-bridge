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
import type { LucideIcon } from "lucide-react";
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
    ],
  }),
  component: EcosistemasPage,
});

const left: { icon: LucideIcon; text: string }[] = [
  { icon: Columns3, text: "Organizaciones que necesitan ordenar, estabilizar y escalar." },
  { icon: TrendingDown, text: "Reducción de costos y eficiencia de capital de trabajo." },
  { icon: Users, text: "Transformación, profesionalización y cambio cultural." },
];

const right: { icon: LucideIcon; text: string }[] = [
  { icon: Building2, text: "Empresas en crisis operativa, financiera o de gobierno." },
  { icon: ShieldCheck, text: "Procesos de turnaround (rescate corporativo)." },
  {
    icon: Target,
    text: "Proyectos de expansión: start-ups, take-overs, integración post adquisición.",
  },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-accent/70">
      <span className="h-px w-16 bg-accent/40" />
      <span className="rotate-45 inline-block h-1.5 w-1.5 border border-accent/70" />
      <span className="h-px w-16 bg-accent/40" />
    </div>
  );
}

function Spoke({
  item,
  side,
}: {
  item: { icon: LucideIcon; text: string };
  side: "left" | "right";
}) {
  const Icon = item.icon;
  return (
    <div
      className={`group flex items-center gap-4 ${
        side === "left" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/5 text-accent transition-colors group-hover:bg-accent/15">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed uppercase tracking-[0.12em]">
        {item.text}
      </p>
    </div>
  );
}

function HubNode() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-56 w-56 rounded-full border border-accent/10" />
      <div className="absolute h-48 w-48 rounded-full border border-accent/20" />
      <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full border border-accent/50 bg-gradient-navy text-center shadow-gold-glow">
        {/* Monogram with bridge arc */}
        <svg viewBox="0 0 120 80" className="h-16 w-auto text-accent" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M14 30 Q60 4 106 30" strokeWidth="1.2" />
          <line x1="38" y1="16" x2="38" y2="40" strokeWidth="0.8" opacity="0.6" />
          <line x1="82" y1="16" x2="82" y2="40" strokeWidth="0.8" opacity="0.6" />
          <text
            x="60"
            y="66"
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontSize="54"
            fill="currentColor"
            stroke="none"
          >
            E
          </text>
        </svg>
        <span className="mt-1 text-[9px] tracking-[0.25em] uppercase text-muted-foreground px-4 leading-tight">
          Ecosistemas de Intervención
        </span>
      </div>
    </div>
  );
}

function EcosistemasPage() {
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

      {/* HUB & SPOKES */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
            {/* Left contexts */}
            <div className="order-2 lg:order-1 flex flex-col gap-10">
              {left.map((item, i) => (
                <Reveal key={item.text} delay={i * 90}>
                  <Spoke item={item} side="left" />
                </Reveal>
              ))}
            </div>

            {/* Hub */}
            <Reveal className="order-1 lg:order-2" delay={120}>
              <HubNode />
            </Reveal>

            {/* Right contexts */}
            <div className="order-3 flex flex-col gap-10">
              {right.map((item, i) => (
                <Reveal key={item.text} delay={i * 90}>
                  <Spoke item={item} side="right" />
                </Reveal>
              ))}
            </div>
          </div>
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
