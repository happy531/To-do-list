const Task = require("../../db/models/task");

class TaskActions {
  async getTasks(req, res) {
    let doc;

    try {
      doc = await Task.find({});
      // throw new Error("Something went wrong :(");
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(doc);
  }

  async getTask(req, res) {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    res.status(200).json(task);
  }

  async saveTask(req, res) {
    const text = req.body.text;
    let newTask;

    try {
      newTask = new Task({
        text: text,
        isDone: false,
      });
      await newTask.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(newTask);
  }

  async updateTask(req, res) {
    const id = req.params.id;
    const text = req.body.text;

    const task = await Task.findOne({ _id: id });
    task.text = text;
    await task.save();

    res.status(201).json(task);
  }

  async toggleDoTask(req, res){
    const id = req.params.id;
    const isDone = req.body.isDone;

    const task = await Task.findOne({ _id: id });
    if(isDone) task.isDone = true;
    else task.isDone = false;
    await task.save();

    res.status(201).json(task);
  }

  async deleteTask(req, res) {
    const id = req.params.id;
    await Task.deleteOne({ _id: id });
    res.status(204).send();
  }
}

module.exports = new TaskActions();
