import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV,

  enabled: process.env.NODE_ENV === "production",

  integrations: [],

  ignoreErrors: ["NetworkError", "ResizeObserver", /Loading chunk \d+ failed/],

  beforeSend(event) {
    if (event.user) {
      event.user = {
        ...event.user,
        id: "anonymous",
        ip_address: undefined,
      };
    }
    return event;
  },

  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
});
