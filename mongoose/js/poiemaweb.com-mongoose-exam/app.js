// ENV
require("dotenv").config();
// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4500;

// Static File Service
app.use(express.static("public"));
// express.js도 빌트인 Body-parser가 포함됨 (추후 사용을 위해서 body-parser 모듈은 삭제하지 않음)
app.use(express.json());

// Node의 native Promise 사용
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

// ROUTERS
app.use("/todos", require("./routes/todos"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`PORT: ${process.env.PORT}`);
  console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
});
