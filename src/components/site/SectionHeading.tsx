import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-4 text-accent text-xs tracking-[0.3em] uppercase", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-accent/60" />
          {eyebrow}
          <span className="h-px w-8 bg-accent/60" />
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
