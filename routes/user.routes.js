import { Router } from "express";
import {
  loginUserHandler,
  userRegisterHandler,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(userRegisterHandler);
router.route("/login").post(loginUserHandler);

export default router;
