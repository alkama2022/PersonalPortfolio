import { whyWorkWithMe } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";

export function WhyWorkWithMeSection() {
  return (
    <section id="why-work-with-me" className="bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Why Work With Me?"
          subtitle="What you can expect when we build together."
        />

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMe.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1} className="min-w-0">
              <div className="h-full rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
