import { RequestHandler } from "express";
import { Todos } from "../models/Todos";

export const createToDo: RequestHandler = async (req, res, next) => {
  const todos = await Todos.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created Successfully", data: todos });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: Todos | null = await Todos.findByPk(id);

  await Todos.destroy({ where: { id: id } });

  return res
    .status(200)
    .json({ message: "Todo deleted Successfully", data: deletedTodo });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allToDos: Todos[] = await Todos.findAll();

  return res.status(200).json({ message: "All Todos", data: allToDos });
};

export const getToDoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);

  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: todos });
};

export const updateToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);

  await Todos.update({ ...req.body }, { where: { id: id } });

  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: todos });
};
