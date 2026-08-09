import { experience } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code2, Users } from "lucide-react";

const typeConfig = {
  work: { icon: Briefcase, label: "Work", color: "bg-primary/10 text-primary" },
  training: { icon: GraduationCap, label: "Training", color: "bg-amber-500/10 text-amber-500" },
  project: { icon: Code2, label: "Project", color: "bg-emerald-500/10 text-emerald-500" },
  "open-source": { icon: Users, label: "Open Source", color: "bg-violet-500/10 text-violet-500" },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey, academic projects, and contributions to the developer community."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
          {experience.map((item, index) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div className={`relative mb-8 md:flex ${isLeft ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div className={`grid h-8 w-8 place-items-center rounded-full ${config.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div
                      className={`rounded-xl border border-border bg-surface p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`mb-2 flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}
                      >
                        <Badge variant="outline" className="text-xs">
                          {config.label}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{item.period}</span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-primary">{item.organization}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
