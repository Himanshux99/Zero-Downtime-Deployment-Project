export const healthUnCheck = (req, res) => {
  return res.status(500).json({
    status: "Not ok",
    version: process.env.VERSION || "v1",
  });
};