const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world");
  res.end();
});

app.all("*", (req, res, next) => {
  const error = new Error("존재하지 않는 페이지 입니다");
  error.status = 404;
  next(error);
});

// logger middleware
const logHandler = (err, req, res, next) => {
  console.error("[" + new Date() + "]\n" + err.stack);
  next(err);
};

// error handler middleware
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || "Error!!");
};

app.use(logHandler);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Express server listening on port " + 3000);
});
