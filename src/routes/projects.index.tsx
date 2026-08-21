import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/projects-page";
import { siteUrl } from "@/lib/data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Alkama Umar Liman" },
      {
        name: "description",
        content:
          "Browse the full project portfolio of Alkama Umar Liman, including backend systems, Django APIs, and full-stack applications.",
      },
      { property: "og:title", content: "Projects — Alkama Umar Liman" },
      {
        property: "og:description",
        content:
          "Browse the full project portfolio of Alkama Umar Liman, including backend systems, Django APIs, and full-stack applications.",
      },
      { property: "og:url", content: `${siteUrl}/projects` },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/projects` }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return <ProjectsPage />;
}
