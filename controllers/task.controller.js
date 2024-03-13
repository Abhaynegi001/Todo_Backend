import { Task } from "../models/task.model.js";

export const newTask = async (req, res) => {
  const { title, description } = req.body;

  await Task.create({ title, description, user: req.user });

  res.status(201).json({
    sucess: true,
    message: "Task added Successfully",
  });
};

export const getMytask = async (req, res) => {
  const userid = req.user._id;

  const task = await Task.find({ user: userid });

  res.status(200).json({
    success: true,
    task,
  });
};

export const updateTask = async (req, res) => {
  const id = req.params.id;

  const task = await Task.findById(id);

  if (!task)
    return res.status(404).res.json({
      success: false,
      message: "Invalid Id",
    });

  task.isCompleted = !task.isCompleted;

  await task.save();

  res.status(200).json({
    success: true,
    message: "Task Update",
  });
};
export const deleteTask = async (req, res, next) => {
  const id = req.params.id;

  const task = await Task.findById(id);

  if (!task) return next(new Error("Imvalid ID"));

  await task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task delete",
  });
};
