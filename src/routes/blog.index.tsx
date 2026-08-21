import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/blog-page";
import { siteUrl } from "@/lib/data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Alkama Umar Liman" },
      {
        name: "description",
        content:
          "Articles and tutorials by Alkama Umar Liman on Django, Python backend development, APIs, and databases.",
      },
      { property: "og:title", content: "Blog — Alkama Umar Liman" },
      {
        property: "og:description",
        content:
          "Articles and tutorials by Alkama Umar Liman on Django, Python backend development, APIs, and databases.",
      },
      { property: "og:url", content: `${siteUrl}/blog` },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return <BlogPage />;
}
