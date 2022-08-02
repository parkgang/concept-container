## Overview

1. `next.js` + `iron-session` + `react-query` project 입니다.
1. 아래의 예제가 포함되어 있습니다.
   1. props drilling 없이 Server Side에서 조회된 데이터를 Client Side가 접근할 수 있는 예제
      1. 이를 위해서 Server Side에서 `react-query` 를 prefetch 합니다. `suspense` 없이 데이터가 미리 불러오는 것을 네트워크 탭으로 화인해보세요.
   1. 모든 페이지에 사용되는 API 호출을 위한 예제
1. [with-iron-session](https://github.com/vercel/next.js/tree/canary/examples/with-iron-session) 이용하여 스케폴드 되었지만 핵심은 `iron-session` 가 아닙니다. 스케폴드된 프로젝트를 재사용하면서 발생한 문제입니다. 물론 스케폴드된 그대로 `iron-session` 으로 로그인이 되어있긴 합니다. 스케폴드 내용 중 바뀐 것은 아래와 같습니다.
   1. [pages/profile-ssr.tsx](pages/profile-ssr.tsx) `res.setHeader()` 으로 리디렉션을 설정하는 것이 아닌 `next.js` 기능으로 처리
      1. `res.setHeader()` 으로 하면 SSR에서는 잘 동작하지만 SSR 이후 CSR 접근 당시 리디렉션 해야하는 상황임에도 되지 않는 문제가 있습니다.
   1. 필요없어서 `vercel.json` 제거
   1. 이외는 commit history 이외 diff로 확인하세요.

## Quick Start

```shell
pnpm i
pnpm run dev
```

## 테스트 시나리오

1. `getInitialProps` 으로 전달된 props가 모든 페이지에서 조회되는가? 브라우저 콘솔창으로 확인
1. `getInitialProps` 으로 호출된 `react-query` 가 모든 페이지에서 조회되는가? `react-query Dev Tool` 에서 확인
