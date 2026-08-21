import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects, siteUrl } from "@/lib/data";
import { PageLayout } from "@/components/page-layout";
import { CaseStudyPage } from "@/components/case-study-page";

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
        { title: `${project.title} — Case Study — Alkama Umar Liman` },
        { name: "description", content: project.caseStudy.summary },
        { property: "og:title", content: `${project.title} — Case Study — Alkama Umar Liman` },
        { property: "og:description", content: project.caseStudy.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${siteUrl}/projects/${project.id}` },
        { property: "og:image", content: `${siteUrl}${project.image}` },
      ],
      links: [{ rel: "canonical", href: `${siteUrl}/projects/${project.id}` }],
    };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => <div>Project not found.</div>,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <PageLayout>
      <CaseStudyPage project={project} />
    </PageLayout>
  );
}
