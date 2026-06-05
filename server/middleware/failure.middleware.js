export const failureMiddleware = (req, res, next) => {
  if (
    req.originalUrl.startsWith("/api/v1/healthCheck") ||
    req.originalUrl.startsWith("/api/v1/metrics")
  ) {
    return next();
  }

  const failureRate =
    Number(process.env.FAILURE_RATE) || 0.1;

  if (
    process.env.VERSION === "v2" &&
    Math.random() < failureRate
  ) {
    return res.status(500).json({
      success: false,
      message: "Simulated Internal Error",
    });
  }

  next();
};