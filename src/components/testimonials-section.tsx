import { testimonials } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, User } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Testimonials"
          subtitle="Kind words from colleagues, mentors, and clients I've had the pleasure to work with."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <Card className="h-full border-border bg-surface transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <Quote className="mb-4 h-8 w-8 text-primary/30" />
                  <blockquote className="flex-1 text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-muted">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
