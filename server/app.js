import express from "express";
import cors from "cors";

const app = express();

// basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://locahost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.send("Welcome to basecampy");
});

//import routes
import healthCheck from "./controller/health.controller";
import metricsRoutes from "./routes/metrics.routes.js";

//routes

app.use("api/v1/metrics", metricsRoutes);
app.use("/api/v1/healthCheck", healthCheck);
export default app;
