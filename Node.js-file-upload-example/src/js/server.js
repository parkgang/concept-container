const http = require("http");
const url = require("url");

const start = (route, handle) => {
  const onRequest = (request, response) => {
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);

    response.writeHead(200, { "Content-Type": "text/plain" });
    const content = route(handle, pathname);
    response.write(content);
    response.end();
    console.log();
  };

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
  console.log();
};

exports.start = start;
