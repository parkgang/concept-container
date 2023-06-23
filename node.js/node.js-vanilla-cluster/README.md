## 개요

`Node.js` 의 기본 기능인 [`Cluster`](https://nodejs.org/api/cluster.html) 을 이용해서 잘 클러스터링 되는지 확인합니다.

의도적으로 HTTP 응답 핸들러에서 일정 시간 `이벤트 루프` 를 막도록 지정했는데 클러스터링 없이 하나의 프로세스에서 동작하면 `Event Loop` 가 막혀서 다른 요청을 처리하지 못합니다.

하지만 클러스터링 되었기 때문에 다른 요청에 의해 `이벤트 루프` 가 막혀있더라도 응답이 되는 것을 통해 잘 클러스터링 되고 있다는 것을 알 수 있습니다.

요청을 받는 웹 서버는 [web-server-cluster](./web-server-cluster) 에서 구동될 것이며 여러 명의 사용자, 동시 요청하는 Client의 역할을 [load-test](./load-test) 에서 구현됩니다.

> 참고로 `클러스터` 부분에서 `.mjs` 인 이유는 `Node.js` 공식 홈페이지 예제에서 `ES Module` 으로 나와있길래 손쉽게 `C&P` 후 사용하기 위함이었습니다.

## 시작

```shell
# Terminal Session 1: 웹 서버 활성화
nvm use
cd web-server-cluster
npm run start

# Terminal Session 2: 여러 명의 클라이언트 요청
nvm use
cd load-test
npm i
npm run test
```

## Reference

https://ykss.netlify.app/translation/practical_guide_to_not_blocking_the_event_loop/
