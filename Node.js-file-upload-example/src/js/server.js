const http = require("http");

const start = () => {
  const onRequest = (request, response) => {
    console.log("Request received.");
    response.writeHead(200, { "Context-Type": "text/plain" });
    response.write("Hello, world");
    response.end();
  };

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
};

exports.start = start;
