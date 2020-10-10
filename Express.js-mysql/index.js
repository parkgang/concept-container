const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "",
  password: "",
  database: "",
});

connection.connect();

connection.query("SELECT * from User", (error, rows, fields) => {
  if (error) throw error;
  console.log("User info is: ", rows);
});

connection.end();
