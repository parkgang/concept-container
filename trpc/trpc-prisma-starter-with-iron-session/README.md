## Overview

1. `tRPC` 를 사용하면서 `iron-session` 를 사용하는 예제 프로젝트 입니다.
1. 스케폴드의 경우 https://github.com/trpc/examples-next-prisma-starter 를 사용했는데 동작하지 않는 코드 및 불필요하게 많은 것들이 있어서 `2022-11-08` 기준 아래의 코드가 제거되었습니다.
   > 때문에 스케폴드 관련 내용이 궁금하면 OG에서 보고 여기에서는 `tRPC` 에서 `iron-session` 을 사용하기 위해서 어떻게 적용되어 있는가를 중점으로 보도록 합니다.
   1. .github
   1. playwright
   1. test
   1. docker-compose.yaml
   1. postcss.config.js
   1. playwright.config.ts
   1. render.yaml
   1. sandbox.config.json
   1. tailwind.config.js
   1. vitest.config.ts
   1. /src/pages/api/auth
   1. /src/pages/about.tsx
   1. /src/server/wssDevServer.ts
   1. /src/server/prodServer.ts
   1. /src/styles
   1. /.vscode/settings.json

## Start

```shell
npm i
npm run dx
```
