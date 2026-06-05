import {
  requestCounter,
  errorCounter,
  requestDurationHistogram,
} from "../service/metrics.service.js";

export const metricsMiddleware = (req, res, next) => {
  const startTime = process.hrtime();

  res.on("finish", () => {
    const diff = process.hrtime(startTime);

    const duration =
      diff[0] + diff[1] / 1_000_000_000;

    const route =
      req.baseUrl + req.path || req.originalUrl;

    const labels = {
      method: req.method,
      route,
      status: res.statusCode,
      version: process.env.VERSION || "v1",
    };

    requestCounter.inc(labels);

    if (res.statusCode >= 400) {
      errorCounter.inc(labels);
    }

    requestDurationHistogram.observe(
      {
        method: req.method,
        route,
        version: process.env.VERSION || "v1",
      },
      duration,
    );
  });

  next();
};