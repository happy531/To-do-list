const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  text: String,
});

module.exports = Task;
