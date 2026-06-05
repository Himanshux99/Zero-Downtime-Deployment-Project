import { client, register } from "../config/promethus.js";

export const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status","version"],
});

export const errorCounter = new client.Counter({
  name: "http_errors_total",
  help: "Total number of HTTP errors",
  labelNames: ["method", "route", "status","version"],
});

export const requestDurationHistogram = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "route","version"],
  buckets: [0.05, 0.1, 0.5, 1, 2, 5],
});

register.registerMetric(requestCounter);
register.registerMetric(errorCounter);
register.registerMetric(requestDurationHistogram);

export { register };
