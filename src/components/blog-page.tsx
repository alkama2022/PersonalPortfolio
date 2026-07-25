import { blogPosts } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function BlogPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container-tight">
        <SectionHeader
          title="Blog"
          subtitle="Thoughts, tutorials, and lessons learned on backend development, Django, and building modern web applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block h-full">
                <Card className="h-full border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-auto flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
