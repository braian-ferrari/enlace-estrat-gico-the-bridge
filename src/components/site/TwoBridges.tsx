import { cn } from "@/lib/utils";

/**
 * Two bridges side by side with an arrow between them.
 * Left: blueprint/sketch style (muted blue). Right: finished golden/bronze.
 * Represents the transformation from idea to execution.
 */
function BridgeShape({ cables = true }: { cables?: boolean }) {
  return (
    <g fill="none" stroke="currentColor">
      {/* deck */}
      <line x1="10" y1="150" x2="290" y2="150" strokeWidth="1.6" />
      <line x1="10" y1="158" x2="290" y2="158" strokeWidth="0.8" opacity="0.5" />
      {/* suspension arc */}
      <path d="M20 150 Q150 30 280 150" strokeWidth="1.6" />
      {/* towers */}
      <line x1="90" y1="78" x2="90" y2="180" strokeWidth="1.4" />
      <line x1="210" y1="78" x2="210" y2="180" strokeWidth="1.4" />
      <line x1="80" y1="78" x2="100" y2="78" strokeWidth="1.2" />
      <line x1="200" y1="78" x2="220" y2="78" strokeWidth="1.2" />
      {/* cables */}
      {cables &&
        Array.from({ length: 13 }).map((_, i) => {
          const x = 30 + i * 20;
          const t = (x - 20) / 260;
          const y = 150 - 4 * 120 * t * (1 - t);
          return <line key={i} x1={x} y1={y} x2={x} y2="150" strokeWidth="0.7" opacity="0.7" />;
        })}
      {/* pillars below */}
      {[60, 150, 240].map((x) => (
        <line key={x} x1={x} y1="158" x2={x} y2="200" strokeWidth="0.9" opacity="0.6" />
      ))}
      <line x1="10" y1="200" x2="290" y2="200" strokeWidth="1" opacity="0.7" />
    </g>
  );
}

export function TwoBridges({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 230"
      className={cn("w-full h-auto", className)}
      aria-label="Del plano a la obra: la transformación de la idea a la ejecución"
      role="img"
    >
      <defs>
        <pattern id="tb-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M 22 0 L 0 0 0 22" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </pattern>
      </defs>

      {/* Left bridge — blueprint / sketch (muted blue) */}
      <g className="text-muted-foreground" stroke="currentColor">
        <rect x="6" y="10" width="300" height="210" fill="url(#tb-grid)" opacity="0.25" stroke="none" />
        <g opacity="0.85" strokeDasharray="4 3">
          <BridgeShape />
        </g>
        <text x="156" y="28" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7" fontFamily="ui-monospace, monospace">
          PLANO · IDEA
        </text>
      </g>

      {/* Arrow */}
      <g className="text-accent" stroke="currentColor" fill="none" transform="translate(330,0)">
        <line x1="0" y1="115" x2="78" y2="115" strokeWidth="2" />
        <polyline points="62,100 82,115 62,130" strokeWidth="2" />
      </g>

      {/* Right bridge — finished golden / bronze */}
      <g className="text-accent" transform="translate(454,0)" stroke="currentColor">
        <g>
          <BridgeShape />
        </g>
        <text x="156" y="28" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.85" fontFamily="ui-monospace, monospace">
          OBRA · EJECUCIÓN
        </text>
      </g>
    </svg>
  );
}

/**
 * Full-width golden line-art bridge for closing banners.
 */
export function BridgeBanner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 220"
      className={cn("w-full h-auto text-accent", className)}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M40 170 Q600 20 1160 170" strokeWidth="1.4" />
      <line x1="20" y1="170" x2="1180" y2="170" strokeWidth="1.2" />
      <line x1="20" y1="178" x2="1180" y2="178" strokeWidth="0.7" opacity="0.5" />
      <line x1="320" y1="70" x2="320" y2="200" strokeWidth="1.4" />
      <line x1="880" y1="70" x2="880" y2="200" strokeWidth="1.4" />
      {Array.from({ length: 38 }).map((_, i) => {
        const x = 50 + i * 30;
        const t = (x - 40) / 1120;
        const y = 170 - 4 * 150 * t * (1 - t);
        return <line key={i} x1={x} y1={y} x2={x} y2="170" strokeWidth="0.6" opacity="0.55" />;
      })}
      <line x1="20" y1="200" x2="1180" y2="200" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}
