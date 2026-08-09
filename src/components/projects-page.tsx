import { useState, useMemo } from "react";
import { projects, allTechnologies, allCategories } from "@/lib/data";
import { ProjectCard } from "@/components/projects-section";
import { SectionHeader } from "@/components/section-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Search, X } from "lucide-react";

export function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesTech = selectedTech === null || project.technologies.includes(selectedTech);
      const matchesCategory = selectedCategory === null || project.category === selectedCategory;

      return matchesSearch && matchesTech && matchesCategory;
    });
  }, [search, selectedTech, selectedCategory]);

  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container-tight">
        <SectionHeader
          title="All Projects"
          subtitle="Browse my complete portfolio of backend systems, APIs, and full-stack applications."
        />

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects by title, technology, or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
              aria-label="Search projects"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Category:</span>
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Badge>
              {allCategories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Technology:</span>
              <Badge
                variant={selectedTech === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTech(null)}
              >
                All
              </Badge>
              {allTechnologies.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.05} className="min-w-0">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-surface py-16 text-center">
            <p className="text-muted-foreground">No projects match your search criteria.</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedTech(null);
                setSelectedCategory(null);
              }}
              className="mt-2 text-sm font-medium text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
