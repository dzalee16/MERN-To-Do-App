const mongoose = require("mongoose");

const TodosScheme = mongoose.Schema({
  title: String,
  completed: Boolean,
  id: String,
});

module.exports = mongoose.model("todos", TodosScheme);
