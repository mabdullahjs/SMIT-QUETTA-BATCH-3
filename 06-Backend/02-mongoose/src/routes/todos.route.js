import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodo,
  getSingleTodo,
} from "../controllers/todos.controller.js";

const router = express.Router();
router.get('/todos' , getAllTodo)
router.post('/todo' , addTodo)
router.get('/todo/:id' , getSingleTodo);
router.delete('/todo/:id' , deleteTodo)


export default router;
