import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const hasLive = project.live.startsWith("http");

  return (
    <Card className="group flex h-full min-w-0 flex-col overflow-hidden border-border bg-surface transition-all hover:border-primary/30 hover:shadow-lg">
      <Link
        to="/projects/$projectId"
        params={{ projectId: project.id }}
        className="relative block aspect-video w-full overflow-hidden bg-muted"
        aria-label={`Read the ${project.title} case study`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full min-w-0 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={600}
          height={340}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
        <div className="absolute bottom-0 left-0 right-0 flex translate-y-0 justify-center p-4 transition-transform duration-300 sm:translate-y-full sm:group-hover:translate-y-0">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-background/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
            Read case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold text-foreground line-clamp-1">
            {project.title}
          </h3>
          <Badge variant="outline" className="shrink-0 text-xs">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2 pt-0">
        {hasLive && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        <Button size="sm" className={hasLive ? "flex-1" : "w-full"} asChild>
          <Link to="/projects/$projectId" params={{ projectId: project.id }}>
            Case Study
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="bg-surface py-20 md:py-28">
      <div className="container-tight">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work across backend systems, APIs, and full-stack applications."
        />

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1} className="min-w-0">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={0.3}>
          <Button size="lg" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
