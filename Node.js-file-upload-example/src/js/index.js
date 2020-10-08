const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

// requestHandlers에 함수가 추가되면 Action에 맞게 URL 맵핑을 진행해야함
const handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

// DI
// "$ npm start"으로 시작하면 됩니다
server.start(router.route, handle);
