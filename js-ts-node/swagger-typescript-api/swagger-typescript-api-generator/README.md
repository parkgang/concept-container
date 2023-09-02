## Overview

1. `swagger` 으로 정의된 `API` 를 손쉽게 `Client Side` 에서 `generate` 해서 사용할 수 있도록 생성해주는 데모 프로젝트 입니다.
1. 어떤 식으로 `Client Side` 에서 소비할 수 있는 `Client` 가 생성되는지 확인할 수 있습니다.

## Start

```shell
# Swagger 문서 기반 axios client로 Build
## [테스트를 위해서 {JSON} Placeholder API를 호출하는 예제이며 swagger spec 해당 링크의 것을 사용](https://github.com/typicode/jsonplaceholder/pull/92)
## `--axios` 를 제거하면 `fetch` 로 생성되는데 `node` 에는 `fetch` 가 없어서 추가 설정이 필요하여 `axios` 으로 예제 구성
npx swagger-typescript-api -p ./schemas/jsonplaceholder-swagger.json -o ./generated -n axios-jsonplaceholder-api.ts --axios

npm i

npm run start
```

## Reference

1. [이외 다른 스키마가 궁금하면 해당 저장소를 참고](https://github.com/acacode/swagger-typescript-api/blob/master/tests/schemas/v3.0/additional-properties2.json)
