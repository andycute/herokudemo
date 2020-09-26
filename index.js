const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.end("123");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
