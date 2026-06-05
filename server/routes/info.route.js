import { Router } from "express";
import { getInfo } from "../controller/info.controller.js";

const router = Router();

router.route("/").get(getInfo);

export default router;