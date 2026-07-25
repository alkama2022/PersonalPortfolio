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
 * Currently logs messages to the server console.
 * To wire up email delivery, replace the console.log below with your
 * preferred email service (e.g. Resend, Nodemailer, SendGrid, etc.).
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // TODO: integrate an email service here.
    // Example with Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ from: "...", to: "...", subject: data.subject, text: data.message });
    console.log("[Contact Form]", JSON.stringify(data, null, 2));
    return { success: true };
  });
