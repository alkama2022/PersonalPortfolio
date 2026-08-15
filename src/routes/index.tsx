import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { TechMarquee } from "@/components/tech-marquee";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GitHubStatsSection } from "@/components/github-stats-section";
import { ContactSection } from "@/components/contact-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alkama Umar Liman — Python Django Backend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Alkama Umar Liman, a Python Django Backend Developer and IT student building secure, scalable, and modern web applications.",
      },
      { property: "og:title", content: "Alkama Umar Liman — Python Django Backend Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Alkama Umar Liman, a Python Django Backend Developer and IT student building secure, scalable, and modern web applications.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <PageLayout>
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <GitHubStatsSection />
      <TestimonialsSection />
      <ContactSection />
    </PageLayout>
  );
}
