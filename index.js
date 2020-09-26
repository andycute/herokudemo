const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express().use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.end(123);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
