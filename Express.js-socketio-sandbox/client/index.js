const io = require("socket.io-client");

const socket = io.connect("http://localhost:3000");

// 서버로 자신의 정보를 전송한다.
socket.emit("login", {
  name: "ungmo2",
  userid: "ungmo2@gmail.com",
});
