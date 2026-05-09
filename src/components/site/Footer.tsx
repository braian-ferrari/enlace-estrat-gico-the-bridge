import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { BridgeBlueprint } from "./BridgeBlueprint";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-accent/15 bg-card/40">
      <div className="absolute inset-x-0 -top-px overflow-hidden pointer-events-none">
        <BridgeBlueprint variant="divider" className="opacity-40" />
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-lg tracking-[0.18em]">ENLACE ESTRATÉGICO</div>
          <div className="text-[11px] tracking-[0.32em] uppercase text-accent mt-1">
            Consultores Especializados
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Cruzamos el puente entre la estrategia y la ejecución. Transformación
            organizacional con foco en resultados reales y medibles.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm tracking-[0.25em] uppercase text-accent mb-4">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/enfoque" className="hover:text-foreground transition-colors">Enfoque</Link></li>
            <li><Link to="/servicios" className="hover:text-foreground transition-colors">Servicios</Link></li>
            <li><Link to="/metodologia" className="hover:text-foreground transition-colors">Metodología</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm tracking-[0.25em] uppercase text-accent mb-4">
            Contacto
          </h3>
          <a
            href="mailto:enlace.estrategico.ar@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            enlace.estrategico.ar@gmail.com
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className="border-t border-accent/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 text-xs text-muted-foreground/70 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Enlace Estratégico. Todos los derechos reservados.</span>
          <span className="tracking-[0.2em] uppercase">Construyendo el puente</span>
        </div>
      </div>
    </footer>
  );
}
