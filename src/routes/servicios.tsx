import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { servicios } from "@/data/services";
import { cn } from "@/lib/utils";

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

function ServiciosPage() {
  const [activeId, setActiveId] = useState<string>(servicios[0].id);
  const activeService = servicios.find((service) => service.id === activeId) ?? servicios[0];

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.slice(1);
      if (servicios.some((service) => service.id === id)) setActiveId(id);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectService = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <section className="pt-20 md:pt-28 pb-8 md:pb-10 border-b border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Servicios"
              title="Nuestros Servicios"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(260px,0.34fr)_minmax(0,1fr)] lg:gap-12">
            <Reveal>
              <div className="border-y border-accent/20 lg:sticky lg:top-28">
                {servicios.map((service) => {
                  const selected = service.id === activeId;
                  return (
                    <Button
                      key={service.id}
                      type="button"
                      variant="ghost"
                      onClick={() => selectService(service.id)}
                      aria-pressed={selected}
                      className={cn(
                        "grid h-auto w-full grid-cols-[minmax(0,1fr)_auto] rounded-none border-b border-accent/15 px-4 py-4 text-left text-sm leading-snug whitespace-normal last:border-b-0 hover:bg-card hover:text-foreground",
                        selected && "border-r-2 border-r-accent bg-card text-accent",
                      )}
                    >
                      <span className="min-w-0">{service.shortTitle}</span>
                      <ChevronRight className={cn("h-4 w-4 shrink-0 transition-transform", selected && "translate-x-1 text-accent")} />
                    </Button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal key={activeService.id}>
              <article id={activeService.id} className="min-w-0 scroll-mt-28 py-2 lg:min-h-[460px]">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                    <activeService.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-accent">Servicio seleccionado</p>
                    <h2 className="font-serif text-2xl uppercase leading-tight text-foreground md:text-4xl">
                      {activeService.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-7 border-l-2 border-accent pl-5 font-serif text-xl italic leading-relaxed text-accent md:text-2xl">
                  {activeService.lead}
                </p>

                <div className="mt-8 space-y-6">
                  {activeService.items.map((item) => (
                    <section key={item.k} className="border-b border-accent/15 pb-6 last:border-b-0">
                      <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                        {item.k}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                        {item.v}
                      </p>
                    </section>
                  ))}
                </div>
              </article>
            </Reveal>
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
              to="/metodologia"
              className="mt-10 group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all"
            >
              Conocé nuestra metodología
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
