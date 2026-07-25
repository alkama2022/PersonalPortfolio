import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/projects-page";
import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alkama Umar Liman" },
      { name: "description", content: "Browse the full project portfolio of Alkama Umar Liman, including backend systems, Django APIs, and full-stack applications." },
      { property: "og:title", content: "Projects — Alkama Umar Liman" },
      { property: "og:description", content: "Browse the full project portfolio of Alkama Umar Liman, including backend systems, Django APIs, and full-stack applications." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return (
    <PageLayout>
      <ProjectsPage />
    </PageLayout>
  );
}

