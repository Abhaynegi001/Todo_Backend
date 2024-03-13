import express from "express";
import {
  myprofile,
  register,
  login,
  logout,
} from "../controllers/user.controller.js";
import { isAuthentication } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthentication, myprofile);

export default router;
