const express = require("express");
const router = express.Router();
const TaskActions = require("../actions/api/TaskActions");

// TASKS
//get tasks
router.get("/tasks", TaskActions.getTasks);

//get task
router.get("/tasks/:id", TaskActions.getTask);

//save task
router.post("/tasks", TaskActions.saveTask);

//edit task
router.put("/tasks/:id", TaskActions.updateTask);

//do task
router.put("/tasks/:id/toggle-do", TaskActions.toggleDoTask)

//delete task
router.delete("/tasks/:id", TaskActions.deleteTask);

module.exports = router;
