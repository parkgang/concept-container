const loadtest = require("loadtest");

function statusCallback(error, result, latency) {
  if (error) {
    return console.error("로드 테스트 요청 중 오류 발생: %s", error);
  }

  console.log(
    `${result.requestIndex} Req Index 응답 결과:`,
    result.body,
    latency.totalTimeSeconds
  );
}

const options = {
  url: "http://localhost:8000",
  maxRequests: 20,
  concurrency: 20,
  statusCallback: statusCallback,
};

loadtest.loadTest(options, (error) => {
  if (error) {
    return console.error("로드 테스트 중 오류 발생: %s", error);
  }

  console.log("Tests run successfully");
});
