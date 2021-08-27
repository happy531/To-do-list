const express = require("express");
const router = express.Router();

router.get("/api/", function (req, res) {
  res.send("server works!");
});

module.exports = router;
