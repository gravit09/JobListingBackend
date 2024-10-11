import { Router } from "express";
import {
  getAllJobHandler,
  listJobHandler,
} from "../controllers/job.controller.js";

const router = Router();

router.route("/listJob").post(listJobHandler);
router.route("/allJobs").get(getAllJobHandler);

export default router;
