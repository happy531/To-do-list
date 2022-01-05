const express = require("express");
const app = express();
const { port } = require("./config/config");
const apiRouter = require("./routes/api");
const cors = require("cors");

//db
require("./db/mongoose");

//parsers
//Content-type: application/json
app.use(express.json());

//fix cors
app.use(cors());

//routes
app.use("/api", apiRouter);

//server
app.listen(port, function () {
  console.log("server is listening on http://localhost:" + port);
});
