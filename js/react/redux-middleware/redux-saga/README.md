# Hi

redux-middleware의 `redux-saga`를 사용한 프로젝트입니다.

> `redux-thunk`의 코드를 동일하게 사용합니다

`proxy`를 이용하여 API를 호출합니다.

# thunk와 diff

`saga` middleware를 사용한 것은 제외하고 `redux-thunk`의 코드와 액션이 완전히 동일합니다.
떄문에 서로 diff 하기 용이합니다.

`index.js`, `lib`, `modules`의 코드를 diff 해보면 됩니다.

# dependencies

```shell
yarn add redux-saga
```

# start

프로토타입 API Server를 열어야합니다

```shell
npx json-server ./data.json --watch --port 4000
```
