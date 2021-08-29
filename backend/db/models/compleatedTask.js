const mongoose = require("mongoose");

const CompleatedTaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const CompleatedTask = mongoose.model("CompleatedTask", CompleatedTaskSchema);

module.exports = CompleatedTask;
