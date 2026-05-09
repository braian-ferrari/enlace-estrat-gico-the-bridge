import { cn } from "@/lib/utils";

/**
 * Decorative blueprint-style bridge illustration.
 * Pure SVG line-art in bronze (currentColor) — use text-accent on parent.
 */
export function BridgeBlueprint({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "divider" | "compact";
}) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 1200 60"
        className={cn("w-full h-auto text-accent", className)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <line x1="0" y1="30" x2="1200" y2="30" strokeDasharray="2 6" opacity="0.5" />
        <circle cx="600" cy="30" r="4" fill="currentColor" />
        <line x1="560" y1="30" x2="500" y2="30" />
        <line x1="640" y1="30" x2="700" y2="30" />
      </svg>
    );
  }

  if (variant === "compact") {
    return (
      <svg
        viewBox="0 0 400 200"
        className={cn("text-accent", className)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M20 160 Q200 40 380 160" strokeWidth="1.2" />
        <line x1="20" y1="160" x2="20" y2="190" />
        <line x1="380" y1="160" x2="380" y2="190" />
        <line x1="200" y1="100" x2="200" y2="190" strokeDasharray="3 4" opacity="0.6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 60 + i * 40;
          const t = (x - 20) / 360;
          const y = 160 - 4 * 30 * t * (1 - t) * 4;
          return <line key={i} x1={x} y1={y} x2={x} y2="190" opacity="0.5" />;
        })}
        <line x1="0" y1="190" x2="400" y2="190" />
      </svg>
    );
  }

  // hero — large architectural blueprint
  return (
    <svg
      viewBox="0 0 800 600"
      className={cn("text-accent", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grid)" />

      {/* Main suspension arc */}
      <path d="M40 460 Q400 100 760 460" strokeWidth="1.4" />
      {/* Deck */}
      <line x1="20" y1="480" x2="780" y2="480" strokeWidth="1.2" />
      <line x1="20" y1="490" x2="780" y2="490" opacity="0.5" />

      {/* Towers */}
      <line x1="180" y1="200" x2="180" y2="520" strokeWidth="1.4" />
      <line x1="190" y1="200" x2="190" y2="520" opacity="0.5" />
      <line x1="620" y1="200" x2="620" y2="520" strokeWidth="1.4" />
      <line x1="630" y1="200" x2="630" y2="520" opacity="0.5" />
      <line x1="170" y1="200" x2="200" y2="200" />
      <line x1="610" y1="200" x2="640" y2="200" />

      {/* Cables from arc to deck */}
      {Array.from({ length: 18 }).map((_, i) => {
        const x = 60 + i * 40;
        const t = (x - 40) / 720;
        const y = 460 - 4 * 360 * t * (1 - t);
        return <line key={i} x1={x} y1={y} x2={x} y2="480" strokeWidth="0.6" opacity="0.7" />;
      })}

      {/* Pillars below */}
      {[120, 280, 400, 520, 680].map((x) => (
        <line key={x} x1={x} y1="490" x2={x} y2="580" opacity="0.5" />
      ))}
      <line x1="0" y1="580" x2="800" y2="580" strokeWidth="1" />

      {/* Dimension marks */}
      <line x1="40" y1="40" x2="760" y2="40" strokeDasharray="2 4" opacity="0.4" />
      <line x1="40" y1="36" x2="40" y2="44" opacity="0.6" />
      <line x1="760" y1="36" x2="760" y2="44" opacity="0.6" />
      <text x="400" y="34" fill="currentColor" fontSize="10" textAnchor="middle" opacity="0.6" fontFamily="ui-monospace, monospace">
        ENLACE · 720
      </text>

      {/* Side annotation */}
      <line x1="20" y1="200" x2="20" y2="480" strokeDasharray="2 4" opacity="0.4" />
      <text x="14" y="340" fill="currentColor" fontSize="9" textAnchor="middle" opacity="0.5" transform="rotate(-90 14 340)" fontFamily="ui-monospace, monospace">
        ESTRATEGIA · EJECUCIÓN · PERSONAS
      </text>
    </svg>
  );
}
