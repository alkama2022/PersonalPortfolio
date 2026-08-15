import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { TechMarquee } from "@/components/tech-marquee";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { GitHubStatsSection } from "@/components/github-stats-section";
import { ContactSection } from "@/components/contact-section";
import { personalInfo } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${personalInfo.name} — ${personalInfo.title}` },
      {
        name: "description",
        content:
          "Portfolio of Alkama Umar Liman, a backend and desktop developer building secure, scalable web and desktop applications.",
      },
      { property: "og:title", content: `${personalInfo.name} — ${personalInfo.title}` },
      {
        property: "og:description",
        content:
          "Portfolio of Alkama Umar Liman, a backend and desktop developer building secure, scalable web and desktop applications.",
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
      <ContactSection />
    </PageLayout>
  );
}
