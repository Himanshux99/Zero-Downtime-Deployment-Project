export const failureMiddleware = (
  req,
  res,
  next
) => {
  const excludedRoutes = [
    "/health",
    "/metrics",
  ];

  if (excludedRoutes.includes(req.path)) {
    return next();
  }

  if (
    process.env.VERSION === "v2" &&
    Math.random() < 0.1
  ) {
    return res.status(500).json({
      success: false,
      message: "Simulated Internal Error",
    });
  }

  next();
};