import fs from "fs";
import http from "http";
import path from "path";

function getContentType(filePath: string): string {
  const ext = path.extname(filePath);

  switch (ext) {
    case ".html":
      return "text/html";
    case ".js":
      return "text/javascript";
    default:
      throw new Error(`파일 확장자에 대한 알 수 없는 콘텐츠 유형: ${ext}`);
  }
}

const server = http.createServer((req, res) => {
  const filePath = path.resolve(
    __dirname,
    // 서버가 컴파일되어 실행되는 디렉토리는 dist 디렉토리이기 때문에 한칸 위로 이동
    "..",
    req.url === "/"
      ? "public/index.html"
      : // `/` 의 `html` 파일에서 테스트할 수 있도록 TS가 JS으로 빌드된 결과물을 `/` 에서 서빙 받기 위함
        `dist/${req.url}`
  );

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }

    res.writeHead(200, { "Content-Type": getContentType(filePath) });
    res.end(data);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
