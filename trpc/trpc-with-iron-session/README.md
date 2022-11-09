## Note

https://trpc.io/docs/v9/awesome-trpc 기여를 위해서 https://github.com/parkgang/trpc-iron-session 으로 이동되었습니다.

**해당 프로젝트는 혹시 몰라서 남겨좋은 것이며 `더 이상 유지보수 되지 않을 것` 입니다.**

## Overview

1. `iron-session` 을 `tRPC` 에서 사용하는 예제입니다.
1. https://github.com/vvo/iron-session/blob/main/examples/next.js-typescript/README.md 으로 스케폴드 되었습니다.
1. 최대한 프로젝트 스트럭처를 바꾸지 않고 `HTTP API` 부분을 `tRPC` 으로 변경하였습니다. 스케폴드된 코드를 여기에 그대로 부으면 `diff` 되어 변경점을 볼 수 있을 겁니다.
1. `tRPC` 를 전역으로 적용해서 `SSG` 페이지는 사실 의미가 없습니다.

## Start

```shell
npm i
npm run dev
```
