import { Router } from "express";
import {
  getAllJobHandler,
  getOrgJobListings,
  listJobHandler,
} from "../controllers/job.controller.js";

const router = Router();

router.route("/listjob").post(listJobHandler);
router.route("/alljobs").get(getAllJobHandler);
router.route("/orgjobs").get(getOrgJobListings);

export default router;
