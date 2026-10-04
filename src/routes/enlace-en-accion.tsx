import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BridgeBanner } from "@/components/site/TwoBridges";

export const Route = createFileRoute("/enlace-en-accion")({
  head: () => ({
    meta: [
      { title: "Enlace en Acción — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Conocé Enlace Estratégico en acción: la aplicación práctica de nuestra metodología de trabajo. Dejanos tus datos y nos pondremos en contacto.",
      },
      { property: "og:title", content: "Enlace en Acción — Enlace Estratégico" },
      {
        property: "og:description",
        content:
          "Construyendo el puente hacia la excelencia operativa. ¿Construimos el puente hacia la excelencia juntos?",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: EnlaceEnAccionPage,
});

const schema = z.object({
  nombre: z.string().min(2, "Ingresá tu nombre."),
  empresa: z.string().min(2, "Ingresá tu empresa."),
  email: z.string().email("Email inválido."),
  telefono: z.string().optional(),
  mensaje: z.string().min(10, "Contanos brevemente cuál es tu desafío."),
});
type FormData = z.infer<typeof schema>;

const EMAIL = "enlace.estrategico.ar@gmail.com";

function EnlaceEnAccionPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Quiero conocer más — ${data.nombre} (${data.empresa})`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmpresa: ${data.empresa}\nEmail: ${data.email}\nTeléfono: ${data.telefono || "—"}\n\nDesafío:\n${data.mensaje}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("¡Gracias! Nos pondremos en contacto", {
      description: "Recibimos tu interés. Te responderemos a la brevedad.",
    });
    reset();
  };

  return (
    <section className="md:-mb-24 md:flex md:h-[calc(100svh-5rem)] md:min-h-[560px] md:flex-col md:overflow-hidden">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden border-b border-accent/10 bg-gradient-navy py-24 md:shrink-0 md:py-4">
        <div className="absolute inset-x-0 bottom-0 opacity-[0.18] pointer-events-none">
          <BridgeBanner />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.32em] text-accent md:mb-2">
              <span className="h-px w-10 bg-accent" />
              Enlace en Acción
              <span className="h-px w-10 bg-accent" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-3xl text-foreground text-balance leading-[1.15] md:text-4xl">
              Construyendo el <span className="text-accent">Puente</span> hacia la{" "}
              <span className="text-accent">Excelencia Operativa</span>
            </h1>
          </Reveal>
        </div>
      </div>

      {/* CONTENT + FORM */}
      <div className="py-16 md:min-h-0 md:flex-1 md:py-4">
        <div className="mx-auto grid h-full max-w-6xl gap-10 px-5 md:grid-cols-5 md:gap-6 md:px-8">
          <Reveal className="md:col-span-2 md:min-h-0">
            <div className="flex h-full flex-col justify-center md:overflow-y-auto md:pr-2">
              <p className="text-lg text-muted-foreground leading-relaxed md:text-base">
                Hemos ayudado a construir el puente hacia la excelencia operativa a
                varias organizaciones. Si te interesa conocer Enlace Estratégico en
                acción viendo la aplicación práctica de nuestra metodología de trabajo,
                dejanos tus datos y nos pondremos en contacto.
              </p>
              <h2 className="mt-10 font-serif text-2xl text-foreground leading-snug md:mt-5">
                ¿Construimos el puente hacia la{" "}
                <span className="text-accent">excelencia</span> juntos?
              </h2>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="md:col-span-3 md:min-h-0" delay={120}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-sm border border-accent/20 bg-card/40 p-8 md:h-full md:overflow-y-auto md:p-5"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2 md:gap-3">
                <Field label="Nombre" error={errors.nombre?.message}>
                  <input
                    {...register("nombre")}
                    className="contact-input"
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Empresa" error={errors.empresa?.message}>
                  <input
                    {...register("empresa")}
                    className="contact-input"
                    placeholder="Nombre de la empresa"
                    autoComplete="organization"
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2 md:mt-3 md:gap-3">
                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className="contact-input"
                    placeholder="tu@empresa.com"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Teléfono (opcional)" error={errors.telefono?.message}>
                  <input
                    {...register("telefono")}
                    type="tel"
                    className="contact-input"
                    placeholder="+54 ..."
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <div className="mt-5 md:mt-3">
                <Field label="¿Cuál es tu desafío?" error={errors.mensaje?.message}>
                  <textarea
                    {...register("mensaje")}
                    rows={6}
                    className="contact-input resize-none"
                    placeholder="Contanos brevemente sobre tu organización y el desafío que estás enfrentando."
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all disabled:opacity-50 md:mt-4 md:px-5 md:py-2.5"
              >
                Quiero conocer más
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>

        <style>{`
          .contact-input {
            width: 100%;
            background: transparent;
            border: 1px solid color-mix(in oklab, var(--accent) 25%, transparent);
            color: var(--foreground);
            padding: 0.7rem 0.85rem;
            font-size: 0.925rem;
            border-radius: 2px;
            outline: none;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .contact-input::placeholder {
            color: color-mix(in oklab, var(--muted-foreground) 70%, transparent);
          }
          .contact-input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent);
          }
        `}</style>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.25em] uppercase text-accent mb-2">{label}</span>
      {children}
      {error && <span className="block mt-1.5 text-xs text-destructive">{error}</span>}
    </label>
  );
}
