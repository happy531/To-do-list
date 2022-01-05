const mongoose = require("mongoose");
const { database } = require("../config/config");

mongoose.Promise = global.Promise;
mongoose.connect(database).then(res => console.log("Connected to DB")).catch(err => console.log(err));
