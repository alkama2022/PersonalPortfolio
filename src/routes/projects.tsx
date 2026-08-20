import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/projects")({
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}