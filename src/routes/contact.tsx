import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { services } from "@/lib/data";
import { ContactSection } from "@/components/contact-section";
import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({
    service: z.string().optional(),
  }),
  head: () => ({
    meta: [
      { title: "Contact — Alkama Umar Liman" },
      {
        name: "description",
        content:
          "Get in touch with Alkama Umar Liman for Django development, React development, REST APIs, admin dashboards, and custom web applications.",
      },
      { property: "og:title", content: "Contact — Alkama Umar Liman" },
      {
        property: "og:description",
        content:
          "Get in touch with Alkama Umar Liman for Django development, React development, REST APIs, admin dashboards, and custom web applications.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const { service } = Route.useSearch();
  const defaultSubject = service
    ? (services.find((s) => s.name === service)?.interestSubject ?? `I'm interested in ${service}.`)
    : undefined;

  return (
    <PageLayout>
      <ContactSection defaultSubject={defaultSubject} />
    </PageLayout>
  );
}
