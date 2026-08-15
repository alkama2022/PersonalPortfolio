import { skillCategories } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

function SkillBar({ level, delay }: { level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const hiddenWidth = reduce ? `${level}%` : "0%";

  return (
    <div ref={ref} className="h-1.5 w-full overflow-hidden rounded-full bg-primary/20">
      <motion.div
        className="h-full rounded-full bg-primary"
        initial={{ width: hiddenWidth }}
        animate={{ width: inView || reduce ? `${level}%` : hiddenWidth }}
        transition={{
          duration: reduce ? 0 : 0.8,
          delay: reduce ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="bg-background py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="My technical toolkit spans backend development, database design, desktop development, frontend fundamentals, and modern DevOps tools."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <Card className="h-full border-border bg-surface transition-all hover:border-primary/30 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} delay={index * 0.05} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
