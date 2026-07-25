import { personalInfo, careerGoals } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Target, Rocket, Heart, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="About Me"
          subtitle="A passionate backend developer driven by clean code, continuous learning, and impactful solutions."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Who I am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background p-4">
                  <Lightbulb className="mb-3 h-5 w-5 text-primary" />
                  <h4 className="font-heading font-semibold text-foreground">Problem Solver</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    I enjoy breaking down complex challenges into elegant solutions.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <Heart className="mb-3 h-5 w-5 text-ember" />
                  <h4 className="font-heading font-semibold text-foreground">Passionate</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Deeply enthusiastic about backend development and software engineering.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Career Goals
              </h3>
              <ul className="space-y-4">
                {careerGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Target className="h-3 w-3" />
                    </span>
                    <span className="text-muted-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Backend", "APIs", "Databases", "Open Source", "Cloud"].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
