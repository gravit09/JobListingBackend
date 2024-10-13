import { Router } from "express";
import { createOrgHandler, getAllOrgs } from "../controllers/org.controller.js";
import { authenticateJWT } from "../middlewares/isAuthenticated.js";

const router = Router();

router.route("/create").post(authenticateJWT, createOrgHandler);
router.route("/getall").get(getAllOrgs);
export default router;
