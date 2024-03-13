import express from "express";
import {
  newTask,
  getMytask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { isAuthentication } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuthentication, newTask);

router.get("/my", isAuthentication, getMytask);

router
  .route("/:id")
  .put(isAuthentication, updateTask)
  .delete(isAuthentication, deleteTask);

export default router;
