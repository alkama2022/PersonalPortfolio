import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/lib/data";
import { PageLayout } from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [
          { title: "Article not found — Alkama Umar Liman" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} — Alkama Umar Liman` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — Alkama Umar Liman` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  component: BlogPostPage,
  errorComponent: () => <div>Failed to load article.</div>,
  notFoundComponent: () => <div>Article not found.</div>,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <PageLayout>
      <article className="bg-background py-12 md:py-20">
        <div className="container-tight max-w-3xl">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            <p className="text-muted-foreground">
              Full article content coming soon. This is a placeholder for the blog post where the
              complete tutorial, code examples, and insights will be published.
            </p>
            <div className="my-8 rounded-lg border border-border bg-surface p-6">
              <p className="text-sm text-muted-foreground">
                Thanks for reading. If you have questions or want to discuss this topic, feel free
                to{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
