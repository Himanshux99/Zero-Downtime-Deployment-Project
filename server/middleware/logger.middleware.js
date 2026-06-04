export const logger = (req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const responseTime = Date.now() - startTime;

    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} | ${res.statusCode} | ${responseTime}ms`
    );
  });

  next();
};