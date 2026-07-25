import { education, certifications } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, CheckCircle2, Clock } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Education & Certifications"
          subtitle="My academic background and a growing list of professional certifications."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground">Education</h3>
            {education.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <Card className="border-border bg-background">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="font-heading text-lg">{item.degree}</CardTitle>
                          <p className="text-sm text-muted-foreground">{item.institution}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-xs">
                        {item.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div>
                      <p className="mb-2 text-sm font-medium text-foreground">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            <BookOpen className="mr-1 h-3 w-3" />
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground">Certifications</h3>
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 0.1}>
                <Card className="border-border bg-background">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ember/10 text-ember">
                        <Award className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-heading font-semibold text-foreground">{cert.title}</h4>
                          <Badge
                            variant={cert.status === "completed" ? "default" : "outline"}
                            className="shrink-0 text-xs"
                          >
                            {cert.status === "completed" ? (
                              <>
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                Completed
                              </>
                            ) : (
                              <>
                                <Clock className="mr-1 h-3 w-3" />
                                {cert.status === "in-progress" ? "In Progress" : "Planned"}
                              </>
                            )}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
