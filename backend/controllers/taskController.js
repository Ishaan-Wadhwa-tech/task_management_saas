const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    UserId: req.user.id,
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { UserId: req.user.id },
  });

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (task.UserId !== req.user.id)
    return res.status(403).json({ message: "Forbidden" });

  task.status = req.body.status;
  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (task.UserId !== req.user.id)
    return res.status(403).json({ message: "Forbidden" });

  await task.destroy();

  res.json({ message: "Deleted" });
};