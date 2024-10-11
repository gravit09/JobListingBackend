import { Router } from "express";
import { userRegisterHandler } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(userRegisterHandler);

export default router;
