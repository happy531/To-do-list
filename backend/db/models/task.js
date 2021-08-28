const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
