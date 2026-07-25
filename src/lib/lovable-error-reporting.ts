/**
 * Error reporting utility.
 * Replace this with your own error tracking service (e.g. Sentry) if needed.
 */
export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[Error Boundary]", error, context);
}
