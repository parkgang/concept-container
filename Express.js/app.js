const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  res.send({ username, password });
});

app.get("/api/books", (req, res) => {
  res.send("GET request to the /api/books");
});

app.post("/api/books", (req, res) => {
  res.send("POST request to the /api/books");
});

// start
app.listen(3000, () => console.log("Example app listening on port 3000!"));
