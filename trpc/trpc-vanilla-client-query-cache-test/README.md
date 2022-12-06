## Overview

`tRPC` 혹은 `react-query` 를 사용할 때 `query` 와 `mutation` 에서 햇갈리는 부분이 있었습니다.

그 중 `query` 부분인데 `query` 는 `hook` 기반으로 데이터가 호출되어서 명령적으로 원하는 시점에 데이터를 가져오는 것이 불편하고 응답 값이 `cache` 되는 특성이 있습니다.

`ID 중복 체크` 와 같은 것이 경우 아래의 이유로 `react-query` 으로 제어하는 것이 부적합 합니다.

1. 확인만 받는 작업이라서 `query` 가 맞는거 같지만 `query` 는 `hook` 기반으로 호출되고 `응답 값이 캐시` 되어서 `query` 으로 호출하는 것은 이상함
1. 검증 작업이므로 원하는 시점에 `API` 를 호출할 수 있어야 함 그래서 `mutation` 를 사용하더라도 `mutateAsync` 으로 호출해야 하는데 `query` 와 `mutation` 모두 `state` 으로 처리되고 `mutateAsync` 으로 사용하면 `react-query` 자체의 `onError` 핸들러롸 상충되므로 코드의 혼란을 야기함

문제는 `tRPC` 를 사용하기로 했으면 `tRPC` 의 `Middlewares` , `Procedures` , etc. 강력한 기능을 사용하기 때문에 `Procedures` 으로 만들어야 하는데 `tRPC` 에서 `Client` 호출이라고 하며 `react-query` 기반만 있어서 발생한 문제입니다.

`tRPC` 를 안쓰는 경우 문제가 없는 것이 `ID 중복 체크` 와 같은 작업의 경우 `axios` 를 이용해서 `HTTP` call을 하면되고 필요한 경우에만 `react-query` 기반의 `hook` 으로 호출할 수 있도록 옵셔널하게 할 수 있기 때문이죠

다행이 `tRPC` 에도 `react-query` 기반이 아닌 `HTTP API` 호출하듯이 `Vanilla client` 로 호출하는 방법을 제공하는데 `query` 이더라도 `Vanilla client` 에서 `cache` 되지 않는지 궁금해서 테스트 해보게 되었습니다.

## Start

```shell
npm i
npm run dev
```
