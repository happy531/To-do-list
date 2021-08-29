const express = require("express");
const router = express.Router();
const TaskActions = require("../actions/api/TaskActions");
const CompleatedTaskActions = require("../actions/api/CompleatedTaskActions");

// TASKS
//download tasks
router.get("/tasks", TaskActions.getTasks);

//download task
router.get("/tasks/:id", TaskActions.getTask);

//save task
router.post("/tasks", TaskActions.saveTask);

//edit task
router.put("/tasks/:id", TaskActions.updateTask);

//delete task
router.delete("/tasks/:id", TaskActions.deleteTask);

// COMPLEATED-TASKS
//download all
router.get("/compleated-tasks", CompleatedTaskActions.getCompleatedTasks);

//download one
router.get("/compleated-tasks/:id", CompleatedTaskActions.getCompleatedTask);

//save
router.post("/compleated-tasks", CompleatedTaskActions.saveCompleatedTask);

//delete
router.delete(
  "/compleated-tasks/:id",
  CompleatedTaskActions.deleteCompleatedTask
);

module.exports = router;
