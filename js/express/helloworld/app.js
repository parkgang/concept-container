const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

app.get("/debug", (req, res) => {
  console.log("debug");
  res.sendfile("public/debug.html");
});
