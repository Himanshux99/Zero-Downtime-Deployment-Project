import { register } from "../config/prometheus.js";

export const getMetrics = async (req, res) => {
  try {
    res.set("Content-Type", register.contentType);

    const metrics = await register.metrics();

    res.status(200).send(metrics);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to generate metrics",
      error: error.message,
    });
  }
};