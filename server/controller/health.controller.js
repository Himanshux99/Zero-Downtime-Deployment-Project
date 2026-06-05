export const healthCheck = (req, res) => {
  return res.status(200).json({
    status: "ok",
    version: process.env.VERSION || "v1",
  });
};