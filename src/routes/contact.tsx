import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/contact-section";
import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alkama Umar Liman" },
      {
        name: "description",
        content:
          "Get in touch with Alkama Umar Liman for backend development, Django, and API projects.",
      },
      { property: "og:title", content: "Contact — Alkama Umar Liman" },
      {
        property: "og:description",
        content:
          "Get in touch with Alkama Umar Liman for backend development, Django, and API projects.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  );
}
