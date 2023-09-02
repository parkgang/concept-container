## 개요

`트랜잭션 격리 수준` 을 테스트 하기위한 프로젝트 이며 각 격리 수준에 대한 `examples` 을 제공합니다.

`examples` 코드를 통해서 어떻게 격리 수준에 따라 동작하는지, lock이 걸리는지 확인할 수 있습니다.

또한, `로컬` 에서 손쉽게 `Prisma` 테스트할 수 있는 프로젝트로도 사용될 수 있습니다.

대부분은 `Prisma` 의 [대화형 트랜잭션](https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide#interactive-transactions) 을 이용하여 구현되었습니다.

각각의 [examples][examples-path] 을 실행하면서 `insight` 를 얻을 수도 있지만 이미 만들어진 [examples][examples-path] 에서 `낮은 격리 수준` 예제 파일에서 `높은 격리 수준` 으로 올려보며 어떻게 동작하는지를 보는 것도 많은 도움이 됩니다.

의도적으로 코드 예제들의 코드 스타일을 비슷하게 구성하였습니다. 파일별 `diff` 를 통해서 어떻게 다른지 살펴보세요.

> 기본적으로 `Prisma` 는 `prisma.user.update()` 와 같은 하나의 쿼리 작업에 대해서도 내부적으로 `트랜잭션` 처리되는 것을 유의하여 보도록 합니다.

> [util.ts][util-file] 에서 `prismaClient` 애 `log` 를 활성화 하여 실제 어떻게 `query` 가 수행되는지 살펴볼 수 있습니다.

## 시작

### 환경 구성

`DBMS` 의 경우 `SQL Server` 를 기준으로 작성되어 있으며 원하면 다른 `DBMS` 로 교체해서 테스트해 볼 수 있을 것 입니다.

`DBMS` 를 실행하고 `Prisma` 스키마 기준으로 `프로비저닝` 을 위해서 아래의 작업을 진행합니다.

```shell
# DBMS 컨테이너 실행
docker-compose up -d
# 노드 버전 설정
nvm use
# Prisma 스키마 기준으로 프로비저닝
npm i && npm run db:reset
```

### 실행

[examples][examples-path] 디렉터리의 코드를 아래의 명령어 중 선택적으로 골라 실행하면 됩니다.

```shell
# `tsx` 가 로컬에 설치되어 있다면 아래의 명령을
npx tsx examples/read-committed.ts
# `tsx` 를 내부 패키지로 관리하고 실행하고 싶다면 아래의 명령을
npm run start -- examples/read-committed.ts
```

[examples-path]: examples
[util-file]: util.ts
