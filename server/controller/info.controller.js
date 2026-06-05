export const getInfo = (req, res) => {
  res.status(200).json({
    status: "healthy",
    backendVersion: process.env.VERSION,
    environment:
      process.env.VERSION === "v2"
        ? "canary"
        : "stable",

    timestamp: new Date(),
  });
};