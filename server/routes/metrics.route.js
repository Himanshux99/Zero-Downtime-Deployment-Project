import { Router } from "express";
import { register } from "../service/metrics.service.js";

const router = Router();

router.get("/", async (req, res) => {
  res.set("Content-Type", register.contentType);

  res.end(await register.metrics());
});

export default router;