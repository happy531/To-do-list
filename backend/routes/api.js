const express = require("express");
const router = express.Router();
const taskActions = require("../actions/api/tasks");

router.get("/", taskActions.saveTask);

module.exports = router;
