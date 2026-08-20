import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
