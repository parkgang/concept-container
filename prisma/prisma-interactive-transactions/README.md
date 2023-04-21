## 개요

`트랜잭션` 시 데이터 락이 걸리는지, 그리고 어떻게 `Prisma` 가 `query` 를 생성하는지 알아보기 위한 프로젝트입니다.

또한, `로컬` 에서 손쉽게 `Prisma` 테스트할 수 있는 프로젝트로도 사용될 수 있습니다.

아래의 방법으로 시작할 수 있습니다.

```shell
npm i
npm run db:reset
npm run dev
```

Prisma의 `대화형 트랜잭션` 는 https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide#interactive-transactions 에서 참고할 수 있습니다.
