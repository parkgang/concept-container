require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4500;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`PORT: ${process.env.PORT}`);
  console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
});
