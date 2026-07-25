import { githubStats, githubLanguages } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Github, GitCommit, GitPullRequest, Star } from "lucide-react";

export function GitHubStatsSection() {
  return (
    <section id="github" className="bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="GitHub Statistics"
          subtitle="A snapshot of my open-source activity and the technologies I use most."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {githubStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <Card className="border-border bg-background text-center transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full" style={{ backgroundColor: `${stat.color}15` }}>
                    {index === 0 ? <GitCommit className="h-5 w-5" style={{ color: stat.color }} /> : 
                     index === 1 ? <GitPullRequest className="h-5 w-5" style={{ color: stat.color }} /> : 
                     index === 2 ? <Star className="h-5 w-5" style={{ color: stat.color }} /> : 
                     <Github className="h-5 w-5" style={{ color: stat.color }} />}
                  </div>
                  <div className="font-heading text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <Card className="mt-8 border-border bg-background">
            <CardContent className="p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Languages Used</h3>
              <div className="flex h-4 w-full overflow-hidden rounded-full">
                {githubLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.value}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.value}%`}
                    aria-label={`${lang.name}: ${lang.value}%`}
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {githubLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="text-sm text-muted-foreground">
                      {lang.name} ({lang.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
