const express = require("express");
const router = express.Router();
const TaskActions = require("../actions/api/TaskActions");

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

module.exports = router;
