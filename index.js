const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.end("123");
});
app.listen("8080", function () {
  console.log("server is running");
});
