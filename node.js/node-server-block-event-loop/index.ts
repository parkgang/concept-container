import { exec, execSync } from "child_process";
import http from "http";
import util from "util";

const server = http.createServer(async (req, res) => {
  const url = req.url;

  switch (url) {
    // 대기 없이 바로 응답합니다.
    case "/ping":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("pong");
      break;
    // 일정 시간 뒤 응답을 하는데 핵심은 이벤트 루프를 차단 하지 않습니다.
    case "/set-timeout":
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, 3_000);
      });
      console.log("setTimeout 대기 완료");

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("일정 시간 뒤 응답");
      break;
    // 동기 적으로 쉘을 수행 후 응답합니다. 이 과정에서 이벤트 루프가 차단되는 것을 확인할 수 있습니다.
    case "/exec-sync":
      // 결과가 반환될 때 까지 이벤트 루프가 차단됩니다.
      const execRes = execSync("./sleep.sh");
      console.log(execRes.toString());

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("쉘을 수행하는 동안 이벤트 루프 차단 후 응답");
      break;
    // 비동기 적으로 쉘을 수행 후 응답합니다. 비동기적으로 수행되기 때문에 이벤트 루프가 차단되지 않는 것을 확인할 수 있습니다.
    case "/exec":
      const execAsync = util.promisify(exec);
      const { stdout } = await execAsync("./sleep.sh");
      console.log(stdout.toString());

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("쉘을 수행은 비동기 적으로 처리 후 응답");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
