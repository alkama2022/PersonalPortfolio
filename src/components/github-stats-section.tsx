import { useQuery } from "@tanstack/react-query";
import { getGitHubStats, FALLBACK_GITHUB_STATS } from "@/lib/github.functions";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { CountUp } from "@/components/count-up";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, GitCommit, Github, Star, Users } from "lucide-react";

const statStyles = [
  { icon: GitCommit, color: "#3b82f6" },
  { icon: Users, color: "#10b981" },
  { icon: Star, color: "#fbbf24" },
  { icon: Code2, color: "#8b5cf6" },
];

const languageColors = ["#3b82f6", "#e85d3a", "#fbbf24", "#10b981", "#8b5cf6", "#14b8a6"];

export function GitHubStatsSection() {
  const { data: stats } = useQuery({
    queryKey: ["github-stats"],
    queryFn: getGitHubStats,
    initialData: FALLBACK_GITHUB_STATS,
    staleTime: 6 * 60 * 60 * 1000,
  });

  const cards = [
    { label: "Public Repositories", value: stats.publicRepos },
    { label: "Followers", value: stats.followers },
    { label: "Stars Earned", value: stats.totalStars },
    { label: "Top Language", value: stats.topLanguage },
  ];

  return (
    <section id="github" className="bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="GitHub Statistics"
          subtitle="Live data from my GitHub profile — updated automatically, with a snapshot fallback when the API is unavailable."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((stat, index) => {
            const { icon: Icon, color } = statStyles[index];
            return (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <Card className="border-border bg-background text-center transition-all hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div
                      className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon className="h-5 w-5" style={{ color }} />
                    </div>
                    <div className="font-heading text-3xl font-bold text-foreground">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <Card className="mt-8 border-border bg-background">
            <CardContent className="p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Languages Used
              </h3>
              <div className="flex h-4 w-full overflow-hidden rounded-full">
                {stats.languages.map((lang, index) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.value}%`,
                      backgroundColor: languageColors[index % languageColors.length],
                    }}
                    title={`${lang.name}: ${lang.value}%`}
                    aria-label={`${lang.name}: ${lang.value}%`}
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {stats.languages.map((lang, index) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: languageColors[index % languageColors.length],
                      }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {lang.name} ({lang.value}%)
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Github className="h-3.5 w-3.5" />
                Stats refresh every 6 hours.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
