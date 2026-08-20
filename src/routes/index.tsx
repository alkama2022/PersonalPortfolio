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
import { ServicesSection } from "@/components/services-section";
import { WhyWorkWithMeSection } from "@/components/why-work-with-me-section";
import { ContactSection } from "@/components/contact-section";
import { personalInfo } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${personalInfo.name} — ${personalInfo.title}` },
      {
        name: "description",
        content:
          "Hire Alkama Umar Liman for Django and React development, REST API development, and admin dashboards. Full-stack web development services for custom web applications.",
      },
      { property: "og:title", content: `${personalInfo.name} — ${personalInfo.title}` },
      {
        property: "og:description",
        content:
          "Hire Alkama Umar Liman for Django and React development, REST API development, and admin dashboards. Full-stack web development services for custom web applications.",
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
      <ServicesSection />
      <WhyWorkWithMeSection />
      <ContactSection />
    </PageLayout>
  );
}
