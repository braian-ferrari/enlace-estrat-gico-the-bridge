import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logoEnlace from "@/assets/logo-enlace-navbar.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/enfoque", label: "Nuestro Diferencial" },
  { to: "/ecosistemas", label: "Ecosistemas de Intervención" },
  { to: "/servicios", label: "Servicios" },
  { to: "/metodologia", label: "Metodología" },
  { to: "/enlace-en-accion", label: "Enlace en Acción" },
  { to: "/contacto", label: "Contacto" },
] as const;

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src={logoEnlace}
        alt="Enlace Estratégico"
        className="h-14 md:h-16 w-auto"
      />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "border-b border-accent/15",
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-8 h-20">
        <Logo />

        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-accent whitespace-nowrap"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 w-0 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>


        <Link
          to="/contacto"
          className="hidden xl:inline-flex items-center justify-center bg-gradient-gold text-accent-foreground px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity rounded-sm"
        >
          Conversemos
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="xl:hidden text-foreground p-2" aria-label="Abrir menú">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-accent/20 w-[88vw] sm:w-96">
            <SheetHeader>
              <SheetTitle className="font-serif text-left text-foreground">Menú</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1 px-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-card rounded-sm transition-colors data-[status=active]:text-accent data-[status=active]:bg-card"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="mt-4 mx-4 inline-flex items-center justify-center bg-gradient-gold text-accent-foreground px-5 py-3 text-xs tracking-[0.2em] uppercase font-medium rounded-sm"
              >
                Conversemos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
