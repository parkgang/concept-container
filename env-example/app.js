const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV == "production" ? ".env" : ".env.dev"
  ),
});

app.get("/", (req, res) => {
  res.send(`아이디: ${process.env.id}\n비밀번호: ${process.env.password}`);
});

app.listen(3000, () => {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log("Express Server Start");
});
