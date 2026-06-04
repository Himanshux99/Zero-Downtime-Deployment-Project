import { Router } from "express";
import healthCheck from "../controller/health.controller";

const router = Router();

router.route().get(healthCheck);

export default router
