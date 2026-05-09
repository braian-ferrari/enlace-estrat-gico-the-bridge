import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Wrench, Users, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodología — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Estrategia, Ejecución y Personas: tres engranajes que aseguran que la transformación se instale permanentemente en el ADN de la empresa.",
      },
      { property: "og:title", content: "Metodología — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "El Rumbo, El Puente y El Motor: nuestro enfoque integral de transformación organizacional.",
      },
    ],
  }),
  component: MetodologiaPage,
});

const pilares = [
  {
    icon: Compass,
    eyebrow: "01 · El Rumbo",
    title: "Estrategia",
    body: "Diagnóstico agudo, modelos escalables y mitigación proactiva de riesgos. Definimos hacia dónde y por qué.",
  },
  {
    icon: Wrench,
    eyebrow: "02 · El Puente",
    title: "Ejecución",
    body: "Reingeniería de procesos, estabilización inmediata y disciplina operativa. Cruzamos del plan a la realidad.",
  },
  {
    icon: Users,
    eyebrow: "03 · El Motor",
    title: "Personas",
    body: "Cambio cultural, profesionalización, mentoría y recambio generacional. El know-how queda en el equipo.",
  },
];

function GearTrio() {
  return (
    <svg
      viewBox="0 0 800 280"
      className="w-full h-auto text-accent"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <line x1="60" y1="140" x2="740" y2="140" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
      {[140, 400, 660].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy="140" r="74" strokeWidth="1.2" />
          <circle cx={cx} cy="140" r="62" strokeWidth="0.8" opacity="0.6" />
          <circle cx={cx} cy="140" r="14" strokeWidth="1" />
          {Array.from({ length: 12 }).map((_, t) => {
            const a = (t / 12) * Math.PI * 2;
            const x1 = cx + Math.cos(a) * 74;
            const y1 = 140 + Math.sin(a) * 74;
            const x2 = cx + Math.cos(a) * 84;
            const y2 = 140 + Math.sin(a) * 84;
            return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.2" />;
          })}
          <text x={cx} y="148" textAnchor="middle" fill="currentColor" fontSize="22" fontFamily="Playfair Display, serif" fontStyle="italic">
            {i + 1}
          </text>
        </g>
      ))}
      {[270, 530].map((x) => (
        <g key={x}>
          <line x1={x - 10} y1="140" x2={x + 10} y2="140" strokeWidth="1.2" />
          <polyline points={`${x + 4},134 ${x + 12},140 ${x + 4},146`} strokeWidth="1.2" />
        </g>
      ))}
    </svg>
  );
}

function MetodologiaPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 border-b border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Metodología"
              title="Tres engranajes interconectados."
              description="Estrategia, Ejecución y Personas no funcionan en serie: funcionan acoplados. Si uno falla, el sistema entero pierde tracción."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <GearTrio />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="h-full rounded-sm border border-accent/20 bg-card/60 p-8 hover:border-accent/60 hover:shadow-gold-glow transition-all">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 border border-accent/30 mb-6">
                    <p.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                    {p.eyebrow}
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.body}</p>
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
              "Nuestro enfoque integral asegura que la transformación no solo se diseñe,
              sino que se instale permanentemente en el ADN de la empresa."
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
