const express = require("express");
const session = require("express-session");

const app = express();

// session 설정
app.use(
  session({
    secret: "Rs89I67YEA55cLMgi0t6oyr8568e6KtD",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/memory-store-counter", (req, res) => {
  const session = req.session;
  if (session && session.count) {
    session.count++;
  } else {
    session.count = 1;
  }
  res.send("count is " + session.count);
});

app.get("/session-destroy", (req, res) => {
  req.session.destroy();
  res.send("Session Destroyed!");
});

app.listen(3000, () => {
  console.log("Express server listening on port " + 3000);
});
