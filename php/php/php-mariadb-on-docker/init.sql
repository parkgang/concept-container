CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

INSERT INTO users (name) VALUES ('Alice'), ('Bob'), ('Charlie');
