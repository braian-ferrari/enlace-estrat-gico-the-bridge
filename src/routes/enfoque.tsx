import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  FileText,
  Landmark,
  Crosshair,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import pilarFoco from "@/assets/pilar-foco.png";
import pilarTransferencia from "@/assets/pilar-transferencia.png";
import pilarServicio from "@/assets/pilar-servicio.png";
import pilarIndependencia from "@/assets/pilar-independencia.png";

export const Route = createFileRoute("/enfoque")({
  head: () => ({
    meta: [
      { title: "Nuestro Diferencial — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Un paradigma diferente de intervención: involucramiento de socios, implementación en campo, transferencia de know-how y soluciones quirúrgicas frente a la consultoría tradicional.",
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

const rows = [
  {
    icon: Users,
    dim: "El Equipo",
    trad: "Estructura piramidal delegada en perfiles Junior.",
    est: "Involucramiento absoluto de nuestros socios.",
  },
  {
    icon: FileText,
    dim: "El Entregable",
    trad: "Informes teóricos y manuales de recomendaciones.",
    est: "Implementación en campo y tracción de resultados.",
  },
  {
    icon: Landmark,
    dim: "El Legado",
    trad: "Dependencia del consultor para la continuidad.",
    est: "Transferencia efectiva de know-how al talento interno.",
  },
  {
    icon: Crosshair,
    dim: "El Enfoque",
    trad: "Plantillas estandarizadas.",
    est: "Soluciones quirúrgicas para resolver situaciones complejas.",
  },
];

const pilares: { title: string; body: string; img: string }[] = [
  {
    img: pilarFoco,
    title: "Foco en Ejecución",
    body: "Actuamos como un equipo externo pero con absoluta inmersión operativa. Mantenemos objetividad para resolver crisis económico/financieras, procesos de expansión, integración, profesionalización, cambio cultural y traspasos generacionales.",
  },
  {
    img: pilarTransferencia,
    title: "Transferencia de Know-How",
    body: "No generamos dependencia. Incorporamos talento, aportamos trayectoria y capacitamos al equipo interno para garantizar la continuidad del éxito.",
  },
  {
    img: pilarServicio,
    title: "Servicio 100% Socios",
    body: "Garantizamos compromiso directo: cada proyecto es ejecutado de principio a fin por sus socios fundadores, sin delegación en perfiles junior o terceros.",
  },
  {
    img: pilarIndependencia,
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
          <rect x="10" y="14" width="70" height="7" strokeWidth="1.4" />
          <path
            d="M14 21 q-2 9 8 9 q10 0 8 -9 M76 21 q2 9 -8 9 q-10 0 -8 -9"
            strokeWidth="1.1"
            opacity="0.9"
          />
          <line x1="16" y1="30" x2="74" y2="30" strokeWidth="1.4" />
          <rect x="14" y="30" width="62" height="6" strokeWidth="1.2" />
          <line x1="16" y1="40" x2="74" y2="40" strokeWidth="1.5" />
          {/* shaft with flutes */}
          <line x1="24" y1="40" x2="24" y2="110" strokeWidth="1.5" />
          <line x1="66" y1="40" x2="66" y2="110" strokeWidth="1.5" />
          {[33, 42, 51, 60].map((x) => (
            <line
              key={x}
              x1={x}
              y1="42"
              x2={x}
              y2="108"
              strokeWidth="0.7"
              opacity="0.5"
            />
          ))}
          {/* base */}
          <line x1="16" y1="110" x2="74" y2="110" strokeWidth="1.5" />
          <rect x="12" y="110" width="66" height="7" strokeWidth="1.3" />
          <rect x="9" y="117" width="72" height="7" strokeWidth="1.4" />
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

      {/* TABLA COMPARATIVA */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* Desktop / tablet */}
          <Reveal>
            <div className="hidden md:grid grid-cols-[200px_1fr_1fr] gap-x-6">
              {/* spacer + headers */}
              <div />
              <div className="rounded-t-md border border-b-0 border-accent/20 bg-card/40 px-6 py-5 text-center font-serif text-xl text-foreground">
                Consultoría Tradicional
              </div>
              <div className="rounded-t-md border border-b-0 border-accent/40 bg-accent/[0.06] px-6 py-5 text-center font-serif text-xl text-accent">
                El Estándar Enlace Estratégico
              </div>

              {/* rows */}
              {rows.map((r, i) => {
                const last = i === rows.length - 1;
                return (
                  <div key={r.dim} className="contents">
                    {/* left label */}
                    <div className="flex items-center justify-end gap-3 pr-2 py-7">
                      <r.icon className="h-6 w-6 text-accent shrink-0" strokeWidth={1.5} />
                      <span className="font-serif text-base uppercase tracking-[0.15em] text-foreground/90 whitespace-nowrap">
                        {r.dim}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    </div>
                    {/* tradicional */}
                    <div
                      className={`border-x border-accent/20 bg-card/40 px-6 py-7 text-center text-muted-foreground leading-relaxed ${
                        last ? "rounded-b-md border-b" : "border-b border-accent/10"
                      }`}
                    >
                      {r.trad}
                    </div>
                    {/* estándar */}
                    <div
                      className={`border-x border-accent/40 bg-accent/[0.06] px-6 py-7 text-center text-foreground leading-relaxed ${
                        last ? "rounded-b-md border-b" : "border-b border-accent/15"
                      }`}
                    >
                      {r.est}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Mobile */}
          <div className="md:hidden space-y-5">
            {rows.map((r, i) => (
              <Reveal key={r.dim} delay={i * 80}>
                <div className="rounded-md border border-accent/20 bg-card/40 overflow-hidden">
                  <div className="flex items-center gap-3 border-b border-accent/15 px-5 py-4">
                    <r.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <span className="font-serif text-base uppercase tracking-[0.12em] text-foreground">
                      {r.dim}
                    </span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                      Consultoría Tradicional
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.trad}</p>
                  </div>
                  <div className="border-t border-accent/20 bg-accent/[0.06] px-5 py-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-1">
                      El Estándar Enlace Estratégico
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{r.est}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
