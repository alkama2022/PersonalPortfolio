import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10).max(1000),
  // Honeypot: real users never fill this in.
  website: z.string().optional(),
});

// Best-effort in-memory sliding-window rate limiter. On serverless each
// instance has its own memory, so this is a throttle rather than a hard
// global limit, but it still blunts automated abuse cheaply.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimits = new Map<string, number[]>();

function pruneRateLimits(now: number) {
  for (const [ip, timestamps] of rateLimits) {
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (recent.length === 0) {
      rateLimits.delete(ip);
    } else {
      rateLimits.set(ip, recent);
    }
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  if (rateLimits.size > 10_000) pruneRateLimits(now);

  const timestamps = (rateLimits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimits.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateLimits.set(ip, timestamps);
  return false;
}

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
    // Honeypot filled: pretend success so bots don't learn anything.
    if (data.website && data.website.length > 0) {
      return { success: true };
    }

    const ip =
      getRequestIP({ xForwardedFor: true }) ??
      getRequest().headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      console.warn(`[Contact Form] Rate limit hit for ${ip}`);
      return { success: false, reason: "RATE_LIMITED" };
    }

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
          to: [process.env.RESEND_TO_EMAIL ?? "alkalineumarliman@gmail.com"],
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
