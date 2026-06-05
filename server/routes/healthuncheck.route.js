import { Router } from "express";
import { healthUnCheck } from "../controller/unHealth.controller.js";

const router = Router();

router.route("/").get(healthUnCheck);

export default router;
