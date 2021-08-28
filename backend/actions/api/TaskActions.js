const Task = require("../../db/models/task");

class TaskActions {
  getTasks(req, res) {
    res.send("API works!");
  }

  getTask(req, res) {
    res.send("task info!");
  }

  saveTask(req, res) {
    // const newTask = new Task({ text: "test task" });
    // newTask.save().then(() => {
    //   console.log("task saved!");
    // });

    const text = req.body.text;

    res.send("task has been created! text: " + text);
  }

  updateTask(req, res) {
    res.send("task updated");
  }

  deleteTask(req, res) {
    const id = req.params.id;
    res.send("task deleted. ID: " + id);
  }
}

module.exports = new TaskActions();
