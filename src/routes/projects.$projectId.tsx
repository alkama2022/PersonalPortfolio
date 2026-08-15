import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, type Project } from "@/lib/data";
import { PageLayout } from "@/components/page-layout";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects/$projectId")({
  loader: async ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) {
      return {
        meta: [
          { title: "Project not found — Alkama Umar Liman" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${project.title} — Alkama Umar Liman` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.title} — Alkama Umar Liman` },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/projects/${project.id}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.id}` }],
    };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => <div>Project not found.</div>,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const hasLive = project.live.startsWith("http");
  const hasGithub = project.github.startsWith("http");
  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <PageLayout>
      <div className="bg-background py-12 md:py-20">
        <div className="container-tight">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
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
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{project.category}</Badge>
              </div>

              <h1 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                {project.title}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {project.features.length > 0 && (
                <div className="mt-6">
                  <h2 className="font-heading text-lg font-semibold text-foreground">
                    Key features
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <h2 className="font-heading text-lg font-semibold text-foreground">Technologies</h2>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {hasLive && (
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {hasGithub && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
              </div>
            </ScrollReveal>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-xl font-semibold text-foreground">Other projects</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {related.map((p, index) => (
                  <ScrollReveal key={p.id} delay={index * 0.1}>
                    <Link to="/projects/$projectId" params={{ projectId: p.id }} className="block">
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
                        <CardContent>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            {p.description}
                          </p>
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
    </PageLayout>
  );
}
