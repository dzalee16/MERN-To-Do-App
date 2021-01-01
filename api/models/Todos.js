const mongoose = require("mongoose");

const TodosScheme = mongoose.Schema({
  title: String,
  completed: Boolean,
});

module.exports = mongoose.model("todos", TodosScheme);
