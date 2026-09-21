import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Crosshair,
  ArrowRight,
  Settings,
  Handshake,
  Eye,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/enfoque")({
  head: () => ({
    meta: [
      { title: "Nuestro Diferencial — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Un paradigma diferente de intervención: involucramiento de socios, implementación en campo, transferencia de know-how y soluciones quirúrgicas.",
      },
      { property: "og:title", content: "Nuestro Diferencial — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "Los pilares de nuestra propuesta de valor: foco en ejecución, transferencia de know-how, servicio 100% socios e independencia objetiva.",
      },
    ],
  }),
  component: DiferencialPage,
});

const pilares: { title: string; body: string; renderIcon: () => ReactNode }[] = [
  {
    renderIcon: () => (
      <Crosshair className="h-9 w-9 text-accent" strokeWidth={1.5} />
    ),
    title: "Foco en Ejecución",
    body: "Actuamos como un equipo externo pero con absoluta inmersión operativa. Mantenemos objetividad para resolver crisis económico/financieras, procesos de expansión, integración, profesionalización, cambio cultural y traspasos generacionales.",
  },
  {
    renderIcon: () => (
      <span className="relative inline-flex items-end justify-center h-10 w-11 text-accent">
        <Settings className="h-8 w-8" strokeWidth={1.5} />
        <Settings className="h-5 w-5 absolute -right-0.5 bottom-0" strokeWidth={1.5} />
      </span>
    ),
    title: "Transferencia de Know-How",
    body: "No generamos dependencia. Incorporamos talento, aportamos trayectoria y capacitamos al equipo interno para garantizar la continuidad del éxito.",
  },
  {
    renderIcon: () => (
      <Handshake className="h-9 w-9 text-accent" strokeWidth={1.5} />
    ),
    title: "Servicio 100% Socios",
    body: "Garantizamos compromiso directo: cada proyecto es ejecutado de principio a fin por sus socios fundadores, sin delegación en perfiles junior o terceros.",
  },
  {
    renderIcon: () => (
      <span className="relative inline-flex items-center justify-center h-11 w-11 text-accent">
        <span className="absolute inset-0.5 rotate-45 border border-accent" />
        <Eye className="h-6 w-6 relative" strokeWidth={1.5} />
      </span>
    ),
    title: "Independencia Objetiva",
    body: "Un Board Advisory que aporta visión estratégica y experiencia especializada para fortalecer la toma de decisiones en entornos complejos.",
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

/** Ornate classical column with a distinct bronze icon resting on the capital. */
function PillarColumn({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        {/* icon resting directly on the capital */}
        <div className="relative z-10 -mb-2 flex items-end justify-center">
          {icon}
        </div>
        <svg
          viewBox="0 0 90 130"
          className="h-32 w-auto text-accent"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          {/* abacus / capital top with ionic volutes */}
          <rect x="10" y="14" width="70" height="7" strokeWidth={1.4} />
          <path
            d="M14 21 q-2 9 8 9 q10 0 8 -9 M76 21 q2 9 -8 9 q-10 0 -8 -9"
            strokeWidth={1.1}
            opacity="0.9"
          />
          <line x1="16" y1="30" x2="74" y2="30" strokeWidth={1.4} />
          <rect x="14" y="30" width="62" height="6" strokeWidth={1.2} />
          <line x1="16" y1="40" x2="74" y2="40" strokeWidth={1.5} />
          {/* shaft with flutes */}
          <line x1="24" y1="40" x2="24" y2="110" strokeWidth={1.5} />
          <line x1="66" y1="40" x2="66" y2="110" strokeWidth={1.5} />
          {[33, 42, 51, 60].map((x) => (
            <line
              key={x}
              x1={x}
              y1="42"
              x2={x}
              y2="108"
              strokeWidth={0.7}
              opacity="0.5"
            />
          ))}
          {/* base */}
          <line x1="16" y1="110" x2="74" y2="110" strokeWidth={1.5} />
          <rect x="12" y="110" width="66" height="7" strokeWidth={1.3} />
          <rect x="9" y="117" width="72" height="7" strokeWidth={1.4} />
        </svg>
      </div>
    </div>
  );
}


function DiferencialPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-24 md:pt-32 pb-10">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <Reveal>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.12em] text-foreground leading-tight">
              Un <span className="text-accent">Paradigma Diferente</span>
              <br className="hidden sm:block" /> de Intervención
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8">
              <Ornament />
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOS PILARES */}
      <section className="py-20 md:py-28 border-t border-accent/10 bg-gradient-navy">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.18em] text-foreground">
                Los Pilares
              </h2>
              <p className="mt-3 text-sm md:text-base uppercase tracking-[0.3em] text-accent">
                De nuestra propuesta de valor
              </p>
              <div className="mt-7">
                <Ornament />
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="flex h-full flex-col items-center text-center">
                  <PillarColumn icon={p.renderIcon()} />
                  <h3 className="mt-6 font-serif text-lg uppercase tracking-[0.1em] text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 flex justify-center">
              <Link
                to="/ecosistemas"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
              >
                Ecosistemas de intervención
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
