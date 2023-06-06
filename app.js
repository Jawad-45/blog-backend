const express = require("express");
const app = express();

const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./Routes/api")

app.use(bodyParser.json());
app.use("/v1/api", router);

/**
 * Connection Establish With MongoDB
 */
const MongoURI = "mongodb://127.0.0.1:27017/blog";
mongoose.set("strictQuery", false);
mongoose.connect(MongoURI).then(() => {
  console.log("MongoDB Connected Successfully");
});

server.listen(4000, () => {
  console.log("Server is Running on Port 4000");
});
