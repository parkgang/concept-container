## 개요

`서비스 워커` 에 대해 알아보기 위해서 https://fe-developers.kakaoent.com/2022/221208-service-worker/ 글을 통해 학습되었습니다.

간단하게 `서비스 워커` 를 통해서 `fetch` 의 이벤트를 가로채는 예제 프로젝트 입니다.

## 특징

### `서비스 워커` 파일 위치 기준으로 `스코프` 가 정해지는데 `서비스 워커` 파일을 `/` 으로 서빙하고 싶어서 웹 서버가 등장했다.

> **핵심은 웹 서버가 굳이 존재하는 이유는 `서비스 워커` 파일을 `/` 경로로 서빙하기 위함이라는 것 입니다.**

`서비스 워커` 파일을 `TS` 으로 만들고 싶었습니다.

`컴파일` 결과물을 `dist` 으로 격리를 해야 `.gitignore` 으로 제외할 수 있을텐데 그러면 문제는 `서비스 워커` 파일이 `dist` 경로로 서빙되니 `/` 에서 손쉽게 `서비스 워커` 를 사용하지 못 하게 되었습니다.

그래서 구차스럽게 `웹 서버` 가 추가되었습니다.

만약, `서비스 워커` 파일을 `JS` 으로 하고 `/` 에서 호스팅 된다면 [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 으로도 살펴볼 수 있을 것 입니다.

### `서비스 워커` 의 타입 추론 문제

> **핵심은 `서비스 워커` 의 타입을 지정하기 위해서는 `declare` 이던 `as` 이던 타입 지정이 필요하다는 것 이었습니다.**

원래는 아래의 문법으로 타입 정의스럽게 하려고 했으나

```ts
export type {};
declare const self: ServiceWorkerGlobalScope;
```

`export` 에서 아무 값이 없어서 발생하는 문제 떄문에 `as` 으로 타입 정의를 하게 되었습니다.

```ts
const sw = self as ServiceWorkerGlobalScope & typeof globalThis;
```

만약, `번들링` 작업이 있다면 한 파일로 합쳐지기 때문에 빈 `export` 으로 발생하는 문제가 없어서 `declare` 으로도 해결이 될 수 있었을 것 입니다.

## 시작

```shell
nvm use
npm i
npm run dev
```

이후 `http://localhost:3000` 으로 접속해서 `console` 화면을 보면 `fetch` 가 가로채서 `console` 에서 로그를 찍는 것을 확인할 수 있습니다.
