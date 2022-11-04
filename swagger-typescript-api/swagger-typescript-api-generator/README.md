## Overview

1. `swagger` 으로 정의된 `API` 를 손쉽게 `Client Side` 에서 `generate` 해서 사용할 수 있도록 생성해주는 데모 프로젝트 입니다.
1. 어떤 식으로 `Client Side` 에서 소비할 수 있는 `Client` 가 생성되는지 확인할 수 있습니다.

## Start

```shell
npx swagger-typescript-api -p ./schemas/swagger.json -o ./generated -n myApi.ts
```

## Reference

1. [테스트를 위한 스키마 파일은 해당 저장소를 참고](https://github.com/acacode/swagger-typescript-api/blob/master/tests/schemas/v3.0/additional-properties2.json)
