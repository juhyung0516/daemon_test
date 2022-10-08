import { Router } from "express";

import {
  createToDo,
  deleteToDo,
  getAllToDo,
  updateToDo,
  getToDoById,
} from "../controller/todo";

const router = Router();

router.post("/", createToDo);
router.post("/", getAllToDo);
router.param("/:id", getToDoById);
router.put("/:id", updateToDo);
router.delete("/:id", deleteToDo);

export default router;
