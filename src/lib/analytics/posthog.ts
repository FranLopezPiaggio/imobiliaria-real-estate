import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

let isInitialized = false;

export function initPostHog(): void {
  if (isInitialized || typeof window === "undefined") return;

  if (!POSTHOG_KEY) {
    console.warn(
      "[PostHog] NEXT_PUBLIC_POSTHOG_KEY not set - analytics disabled",
    );
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: false,
    disable_session_recording: true,
    advanced_disable_decide: true,
    bootstrap: {},
  });

  isInitialized = true;
}

export function capture(
  event: string,
  properties?: Record<string, unknown>,
): void {
  if (!isInitialized || !POSTHOG_KEY) return;

  const sanitizedProperties = sanitizeProperties(properties);

  posthog.capture(event, sanitizedProperties);
}

function sanitizeProperties(
  properties?: Record<string, unknown>,
): Record<string, unknown> | undefined {
  if (!properties) return undefined;

  const bannedKeys = [
    "email",
    "name",
    "phone",
    "address",
    "ip",
    "cookie",
    "token",
    "password",
  ];
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(properties)) {
    const lowerKey = key.toLowerCase();
    if (!bannedKeys.some((banned) => lowerKey.includes(banned))) {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

export { posthog };
