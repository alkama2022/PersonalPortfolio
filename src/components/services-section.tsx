import { Link } from "@tanstack/react-router";
import { services } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Services"
          subtitle="I build reliable, scalable web applications and backend systems that solve real business problems."
        />

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1} className="min-w-0">
              <Card className="flex h-full flex-col border-border bg-surface transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex-1 p-6">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="font-heading text-2xl font-bold text-foreground">
                      {service.price}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      Project range
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{service.description}</p>
                  <h4 className="mb-3 mt-5 font-heading text-sm font-semibold text-foreground">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/contact" search={{ service: service.name }}>
                      Hire Me
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-center text-sm text-muted-foreground">
            Prices are project price ranges, not hourly rates. Final pricing depends on project
            scope, complexity, features, and requirements.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
