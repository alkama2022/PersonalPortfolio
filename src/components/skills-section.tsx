import { skillCategories } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-background py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="My technical toolkit spans backend development, database design, frontend fundamentals, and modern DevOps tools."
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
                      <Progress value={skill.level} className="h-1.5" />
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
