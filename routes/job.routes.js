import { Router } from "express";
import { listJobHandler } from "../controllers/job.controller.js";

const router = Router();

router.route("/listJob").post(listJobHandler);

export default router;
