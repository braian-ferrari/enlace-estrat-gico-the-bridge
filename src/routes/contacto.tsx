import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BridgeBlueprint } from "@/components/site/BridgeBlueprint";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Enlace Estratégico" },
      {
        name: "description",
        content:
          "Construyendo el puente hacia la excelencia operativa. Escribinos para conversar sobre tu organización.",
      },
      { property: "og:title", content: "Contacto — Enlace Estratégico" },
      {
        property: "og:description",
        content: "enlace.estrategico.ar@gmail.com — Buenos Aires, Argentina.",
      },
    ],
  }),
  component: ContactoPage,
});

const schema = z.object({
  nombre: z.string().min(2, "Ingresá tu nombre."),
  empresa: z.string().min(2, "Ingresá tu empresa."),
  email: z.string().email("Email inválido."),
  mensaje: z.string().min(10, "Contanos brevemente cómo podemos ayudarte."),
});
type FormData = z.infer<typeof schema>;

const EMAIL = "enlace.estrategico.ar@gmail.com";

function ContactoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Consulta de ${data.nombre} — ${data.empresa}`);
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmpresa: ${data.empresa}\nEmail: ${data.email}\n\n${data.mensaje}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    // Fallback al cliente de correo por defecto si el navegador bloquea la ventana
    if (!win) {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    }
    toast.success("Abrimos tu correo con el mensaje listo", {
      description: "Solo tenés que revisarlo y darle a Enviar.",
    });
    setSent(true);
    reset();
  };

  return (
    <>
      <section className="relative pt-20 md:pt-28 pb-16 overflow-hidden border-b border-accent/10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
          <BridgeBlueprint className="w-[140%]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6 text-accent text-xs tracking-[0.32em] uppercase">
              <span className="h-px w-10 bg-accent" />
              Contacto
              <span className="h-px w-10 bg-accent" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-[1.1]">
              Construyendo el puente hacia la{" "}
              <span className="italic text-accent">excelencia operativa.</span>
            </h1>
          </Reveal>
        </div>

      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="rounded-sm border border-accent/20 bg-card/60 p-8 h-full">
              <h2 className="font-serif text-2xl text-foreground mb-6">Escribinos</h2>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-4 mb-6 p-4 -mx-4 rounded-sm hover:bg-accent/5 transition-colors"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/30">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs tracking-[0.25em] uppercase text-accent mb-1">Email</div>
                  <div className="text-sm text-foreground group-hover:text-accent transition-colors break-all">
                    {EMAIL}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 mb-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/30">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-accent mb-1">Ubicación</div>
                  <div className="text-sm text-foreground">Buenos Aires, Argentina</div>
                </div>
              </div>

              <div className="border-t border-accent/15 pt-6">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-6 py-3 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all w-full justify-center"
                >
                  Escribir por email
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={120}>
            {sent ? (
              <div className="rounded-sm border border-accent/30 bg-card/60 p-10 h-full flex flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/40 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-serif text-2xl text-foreground mb-3">¡Tu correo está listo!</h2>
                <p className="text-sm text-muted-foreground max-w-md mb-8">
                  Abrimos tu correo con el mensaje completo. Solo tenés que revisarlo y darle a
                  Enviar. Si no se abrió, revisá que tu navegador no haya bloqueado la ventana.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="group inline-flex items-center gap-3 border border-accent/40 text-accent px-6 py-3 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:bg-accent/5 transition-all"
                >
                  Enviar otro mensaje
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-sm border border-accent/20 bg-card/40 p-8"
              noValidate
            >
              <h2 className="font-serif text-2xl text-foreground mb-6">Formulario de contacto</h2>

              <div className="grid gap-5 sm:grid-cols-2">
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

              <div className="mt-5">
                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className="contact-input"
                    placeholder="tu@empresa.com"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Mensaje" error={errors.mensaje?.message}>
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
                className="mt-8 group inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:opacity-90 transition-all disabled:opacity-50"
              >
                Enviar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: 1px solid color-mix(in oklab, var(--accent) 25%, transparent);
          color: var(--foreground);
          padding: 0.85rem 1rem;
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
    </>
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
