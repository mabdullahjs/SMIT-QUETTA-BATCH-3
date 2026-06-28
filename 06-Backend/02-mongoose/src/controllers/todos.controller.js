import mongoose from "mongoose";
import Todos from "../models/todos.model.js";

const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    const todo = await Todos.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Todo added to database successfully",
      todo,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const getAllTodo = async (req, res) => {
  const todos = await Todos.find({});
  res.status(200).json({
    todos: todos,
  });
};
const getSingleTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const todo = await Todos.findById(id);
  if (!todo) {
    res.status(404).json({
      message: "no todo found!",
    });
    return;
  }

  res.status(200).json(todo);
};
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid id" });
  }

  const todo = await Todos.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(404).json({ error: "No Todo found" });
  }
  res.status(200).json({
    message: "todo deleted successfully",
    todo,
  });
};
// const editTodo = async (req, res) => {};

export { addTodo, getAllTodo, getSingleTodo, deleteTodo };

//  const todo = await Todos.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );