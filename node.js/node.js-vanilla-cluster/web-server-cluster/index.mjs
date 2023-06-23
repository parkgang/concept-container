import { execSync } from "node:child_process";
import cluster from "node:cluster";
import http from "node:http";
import { availableParallelism } from "node:os";
import process from "node:process";

// 해당 값을 의도적으로 변경했을 때 여러 명의 사용자 요청이 들어오면 어떻게 되는지 확인할 수 있습니다.
const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // 작업자는 모든 TCP 연결을 공유할 수 있습니다. 이 경우 HTTP 서버입니다.
  http
    .createServer((req, res) => {
      // 의도적으로 이벤트 루프를 차단: 클러스터링이 된다면 해당 프로세스에서 블록되더라도 다른 곳에서 요청을 잘 받아 처리할 것
      const execRes = execSync("./sleep.sh");
      console.log(execRes.toString());

      res.writeHead(200);
      res.end(`Hi, I'm Worker ${process.pid}\n`);
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
