import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10).max(1000),
});

/**
 * Contact form server function.
 *
 * If a RESEND_API_KEY environment variable is configured (Vercel project
 * settings), messages are delivered to the portfolio owner via the Resend
 * REST API. Without it, the function returns `success: false` and the client
 * falls back to opening the visitor's email client with a prefilled message.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return { success: false, reason: "EMAIL_NOT_CONFIGURED" };
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
          to: [process.env.RESEND_TO_EMAIL ?? "alkamaumarliman@gmail.com"],
          reply_to: data.email,
          subject: `[Portfolio] ${data.subject}`,
          text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
        }),
      });

      if (!res.ok) {
        console.error("[Contact Form] Resend delivery failed", res.status);
        return { success: false, reason: "DELIVERY_FAILED" };
      }
      return { success: true };
    } catch (error) {
      console.error("[Contact Form] Resend delivery error", error);
      return { success: false, reason: "DELIVERY_FAILED" };
    }
  });
