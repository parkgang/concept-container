const http = require("http");
const url = require("url");

const start = (route) => {
  const onRequest = (request, response) => {
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received`);

    route(pathname);

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello, world");
    response.end();
  };

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
};

exports.start = start;
