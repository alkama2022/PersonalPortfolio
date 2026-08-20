import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Lightbulb,
  ListChecks,
  MessageSquareQuote,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";

const sectionIndex = (index: number) => String(index).padStart(2, "0");

function CaseStudySection({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: number;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <ScrollReveal className="mt-14 md:mt-20">
      <section id={id} aria-labelledby={`${id}-heading`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-primary">
            {sectionIndex(index)}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2
          id={`${id}-heading`}
          className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          {title}
        </h2>
        {lead && (
          <p className="mt-3 max-w-3xl text-balance text-muted-foreground md:text-lg">{lead}</p>
        )}
        <div className="mt-8">{children}</div>
      </section>
    </ScrollReveal>
  );
}

export function CaseStudyPage({ project }: { project: Project }) {
  const cs = project.caseStudy;
  const hasLive = project.live.startsWith("http");
  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  const contents = [
    { href: "#overview", label: "Overview" },
    { href: "#why", label: "Why we built it" },
    { href: "#problems", label: "The problem" },
    { href: "#solution", label: "The solution" },
    { href: "#engineering", label: "How we solved it" },
    { href: "#features", label: "Key features" },
    { href: "#stack", label: "Tech stack" },
    { href: "#challenges", label: "Challenges" },
    { href: "#overcoming", label: "Overcoming challenges" },
    { href: "#results", label: "Results" },
    { href: "#lessons", label: "Lessons learned" },
  ];

  return (
    <div className="bg-background">
      <div className="container-tight py-12 md:py-16">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>

        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant="secondary" className="items-center gap-1">
              <MessageSquareQuote className="h-3 w-3" />
              Case Study
            </Badge>
          </div>

          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
            {cs.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {hasLive && (
              <Button size="lg" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">All Projects</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-8">
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="aspect-video w-full object-cover"
              loading="eager"
              width={1024}
              height={576}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <nav aria-label="Case study contents" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {contents.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollReveal>

        <div className="mx-auto mt-6 max-w-4xl">
          <CaseStudySection id="overview" index={1} title="Project Overview" lead={cs.summary}>
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.overview.map((item) => (
                <Card
                  key={item.label}
                  className="border-border bg-surface transition-colors hover:border-primary/30"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="why"
            index={2}
            title="Why We Created This Project"
            lead={`The motivation behind ${project.title} — the problem we noticed, and why it was worth solving.`}
          >
            <div className="space-y-4">
              {cs.why.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-heading text-sm font-semibold text-foreground">
                    The opportunity
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {cs.opportunity}
                  </p>
                </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="problems"
            index={3}
            title="The Problem"
            lead="The real-world problems this project was designed to solve, and their consequences."
          >
            <div className="space-y-4">
              {cs.problems.map((problem, i) => (
                <Card
                  key={problem.title}
                  className="border-border bg-surface transition-colors hover:border-primary/30"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-foreground">
                          {problem.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {problem.description}
                        </p>
                        <p className="mt-2 flex items-start gap-1.5 text-sm text-foreground/80">
                          <Target className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                          <span>{problem.consequence}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="solution"
            index={4}
            title="The Solution"
            lead="How the project solves each problem — from problem, to solution, to result."
          >
            <div className="space-y-4">
              {cs.solutions.map((solution, i) => (
                <Card
                  key={i}
                  className="border-border bg-surface transition-colors hover:border-primary/30"
                >
                  <CardContent className="grid gap-5 p-5 md:grid-cols-[1fr_auto_1.3fr_auto_1fr] md:items-center">
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-ember">
                        Problem
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {solution.problem}
                      </p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-primary md:block" />
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        Solution
                      </div>
                      <p className="text-sm leading-relaxed text-foreground">{solution.solution}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-primary md:block" />
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                        Result
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {solution.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="engineering"
            index={5}
            title="How We Solved It"
            lead="The engineering approach — architecture, technical decisions, and how the system is put together."
          >
            <div className="space-y-4">
              {cs.howWeSolvedIt.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {cs.architecture.map((item) => (
                <Card
                  key={item.title}
                  className="border-border bg-surface transition-colors hover:border-primary/30"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="font-heading text-sm font-semibold text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="features"
            index={6}
            title="Key Features"
            lead="The most important features of the platform."
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-lg border border-border bg-surface p-4 text-sm text-foreground/90"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection
            id="stack"
            index={7}
            title="Technology Stack"
            lead="The technologies actually used to build and run this project."
          >
            <div className="space-y-4">
              {cs.techStack.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="px-3 py-1 text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="challenges"
            index={8}
            title="Challenges"
            lead="The most important technical and product challenges encountered during development."
          >
            <div className="space-y-4">
              {cs.challenges.map((challenge, i) => (
                <Card
                  key={challenge.title}
                  className="border-border bg-surface transition-colors hover:border-primary/30"
                >
                  <CardContent className="flex items-start gap-4 p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ember/10 font-mono text-sm font-bold text-ember">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {challenge.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="overcoming"
            index={9}
            title="How We Overcame the Challenges"
            lead="The engineering decisions behind each solution."
          >
            <div className="space-y-4">
              {cs.overcoming.map((item, i) => (
                <Card
                  key={i}
                  className="border-border bg-surface transition-colors hover:border-primary/30"
                >
                  <CardContent className="grid gap-3 p-5 md:grid-cols-[1fr_2fr]">
                    <div className="flex items-start gap-3">
                      <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <h3 className="font-heading text-sm font-semibold text-foreground">
                        {item.challenge}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.how}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="results"
            index={10}
            title="Results & Impact"
            lead="What the completed project achieves."
          >
            <ul className="space-y-3">
              {cs.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-2 rounded-lg border border-border bg-surface p-4 text-sm text-foreground/90"
                >
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {result}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection
            id="lessons"
            index={11}
            title="Lessons Learned"
            lead="What building this project taught me about engineering and product thinking."
          >
            <ul className="space-y-3">
              {cs.lessons.map((lesson) => (
                <li
                  key={lesson}
                  className="flex items-start gap-2 rounded-lg border border-border bg-surface p-4 text-sm text-foreground/90"
                >
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  {lesson}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <ScrollReveal className="mt-16 md:mt-24">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-ember/10 p-8 text-center md:p-12">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                See {project.title} in action
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-balance text-muted-foreground">
                {hasLive
                  ? "Try the live application and explore the features described in this case study."
                  : "This project is documented here as a case study."}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {hasLive && (
                  <Button size="lg" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button size="lg" variant="outline" asChild>
                  <Link to="/projects">Back to All Projects</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                More case studies
              </h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {related.map((p, index) => (
                  <ScrollReveal key={p.id} delay={index * 0.1}>
                    <Link
                      to="/projects/$projectId"
                      params={{ projectId: p.id }}
                      className="block h-full"
                    >
                      <Card className="h-full overflow-hidden border-border bg-surface transition-all hover:border-primary/30 hover:shadow-lg">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={p.image}
                            alt={`${p.title} screenshot`}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                            width={600}
                            height={340}
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="font-heading text-lg">{p.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between gap-2">
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            {p.description}
                          </p>
                          <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary">
                            Case Study
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
