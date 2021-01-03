const express = require("express");
const router = express.Router();
const Todos = require("../models/Todos");

//Read(get) all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todos.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err });
  }
});

//Create todo
router.post("/", async (req, res) => {
  const todo = new Todos({
    title: req.body.title,
    completed: req.body.completed,
  });

  try {
    const todoSave = await todo.save();
    res.json(todoSave);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get specific todos
router.get("/:todosId", async (req, res) => {
  try {
    const todo = await Todos.findById(req.params.todosId);
    res.json(todo);
  } catch (err) {
    res.json({ message: err });
  }
});

//Remove speciific todo
router.delete("/:todosId", async (req, res) => {
  try {
    const deleteTodo = await Todos.remove({ _id: req.params.todosId });
    res.json(deleteTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update todos
router.patch("/:todosId", async (req, res) => {
  try {
    const updatedTodo = await Todos.updateOne(
      { _id: req.params.todosId },
      { $set: { title: req.body.title, completed: req.body.completed } }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
