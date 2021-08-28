const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
