import { ScrollReveal } from "@/components/scroll-reveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={className}>
      <div className={`mb-12 ${centered ? "text-center" : ""}`}>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
        <div
          className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-ember ${centered ? "mx-auto" : ""}`}
        />
      </div>
    </ScrollReveal>
  );
}
