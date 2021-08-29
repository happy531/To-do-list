const CompleatedTask = require("../../db/models/compleatedTask");

class CompleatedTaskActions {
  async getCompleatedTasks(req, res) {
    let doc;
    try {
      doc = await CompleatedTask.find({});
      // throw new Error("Something went wrong :(");
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(doc);
  }

  async getCompleatedTask(req, res) {
    const id = req.params.id;
    const task = await CompleatedTask.findOne({ _id: id });
    res.status(200).json(task);
  }

  async saveCompleatedTask(req, res) {
    const text = req.body.text;
    let newTask;

    try {
      newTask = new CompleatedTask({
        text: text,
      });
      await newTask.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(newTask);
  }

  async deleteCompleatedTask(req, res) {
    const id = req.params.id;
    await CompleatedTask.deleteOne({ _id: id });
    res.status(204).send();
  }
}

module.exports = new CompleatedTaskActions();
