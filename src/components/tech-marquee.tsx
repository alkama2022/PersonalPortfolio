import { marqueeTech } from "@/lib/data";

export function TechMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-border bg-background py-5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-12 pr-12">
            {marqueeTech.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40" aria-hidden="true" />
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
