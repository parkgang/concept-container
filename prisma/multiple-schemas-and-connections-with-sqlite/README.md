## Overview

1. 멀티 스키마, 멀티 커넥션을 `prisma` 로 사용하는 예제코드 입니다.
1. `Sqlite` 를 이용하여 프로젝트 설정은 https://www.prisma.io/docs/getting-started/quickstart 를 참고하였습니다.
1. 멀티 스키마, 멀티 커넥션 방법은 https://github.com/prisma/prisma/issues/2443#issuecomment-630679118 를 참고하였습니다.
1. node는 `v16.15.0` 으로 진행되었습니다.

## Start

```shell
cd {해당 프로젝트 root으로 진입}
# 스키마에 맞는 Client Build
npx prisma migrate dev --name init --schema prisma/db1-schema.prisma
npx prisma migrate dev --name init --schema prisma/db2-schema.prisma
# 2개의 DB에 데이터가 생성되는 것을 확인할 수 있습니다
npm run start
```
