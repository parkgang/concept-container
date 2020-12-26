var app = require("express")();
var server = require("http").createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require("socket.io")(server);

// localhost:3000으로 서버에 접속하면 클라이언트로 index.html을 전송한다
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// namespace /chat에 접속한다.
var chat = io.of("/chat").on("connection", function (socket) {
  socket.on("chat message", function (data) {
    console.log("message from client: ", data);

    var name = (socket.name = data.name);
    var room = (socket.room = data.room);

    // room에 join한다
    socket.join(room);
    // room에 join되어 있는 클라이언트에게 메시지를 전송한다
    chat.to(room).emit("chat message", data.msg);
  });
});

server.listen(3000, function () {
  console.log("Socket IO server listening on port 3000");
});
