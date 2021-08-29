const mongoose = require("mongoose");
const { database } = require("../config/config");

mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
