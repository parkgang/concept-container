## Overview

`getInitialProps` 사용 예제와 props drilling 하지 않고 Server Side에서 조회된 데이터를 하위 컴포넌트까지 전달하는 방법이 있는 project 입니다.

`Server Side` 에서 `prefetchQuery` 되면 하위 컴포넌트에서 `useQuery` 으로 손쉽게 미리 조회된 데이터에 접근할 수 있습니다. 또한, `suspense` 없이 데이터가 미리 불러오는 것을 네트워크 탭으로 화인해보세요.

또한, 모든 페이지에 미리 요청되어야 하는 데이터의 경우 `getInitialProps` 으로 모두 조회하도록 할 수 있습니다.

각 페이지에 설명을 적어 놓았으니 동작을 확인하고 코드를 보면서 이해해보세요.

> 의도적으로 API `1sec` 후 응답하도록 되어있으니 참고하세요. `API` 응답이 느린 경우 `TTFB` 가 어떤 영향을 미치는지 확인하기 위함입니다.

## Quick Start

```shell
pnpm i
pnpm run dev
```
