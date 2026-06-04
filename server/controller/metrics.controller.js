import { register } from "../service/metrics.service.js";

export const getMetrics = async (req, res) => {
  try {
    res.setHeader(
      "Content-Type",
      register.contentType
    );

    res.send(await register.metrics());
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch metrics",
    });
  }
};