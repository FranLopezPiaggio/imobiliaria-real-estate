import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,

  enabled: process.env.NODE_ENV === "production",

  ignoreErrors: ["NetworkError", /ENOENT/, "Not Found", /404/],

  tracesSampleRate: 0.1,

  beforeSend(event) {
    if (event.request?.headers) {
      delete event.request.headers["authorization"];
      delete event.request.headers["cookie"];
    }
    return event;
  },
});
