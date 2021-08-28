const Task = require("../../db/models/task");

module.exports = {
  saveTask: function (req, res) {
    const newTask = new Task({ text: "test task" });
    newTask.save().then(() => {
      console.log("task saved!");
    });
    res.send("main site is working!");
  },
};
