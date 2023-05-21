# Hi

redux-middleware의 `redux-saga`를 사용한 프로젝트입니다.

# thunk와 diff

`saga` middleware를 사용한 것은 제외하고 `redux-thunk`의 코드와 액션이 완전히 동일합니다. <br/>
떄문에 서로 diff 하기 용이합니다.

## diff list

- containers
  - GithubProfileLoader.tsx
    - 아래에서 단어 중 시작: `request`, 성공: `success`, 실패: `failure` 을 의미합니다.
    - `thunk`에서는 thunk 함수 내부에서 시작 액션을 dispatch 후 로직 수행 결과에 따라 성공, 실패를 내부 처리하기 때문에 `thunk` 생성 함수를 호출해서 한번에 처리했습니다. <br/> 하지만 `saga`의 경우 시작 액션의 dispatch 유무를 모니터링 헤서 시작되면 로직 수행 결과에 따라 성공, 실패를 처리하기 때문에 시작 액션을 dispatch하도록 변경되었습니다.
- lib
  - `thunk`, `saga`에 맞게 비동기 작업을 수행하기 위한 유틸함수가 존재합니다.
  - 2개 모두 목적은 동일합니다. 데이터 요청의 시작을 알리는 `request`으로 로딩창을 렌더링 후 성공과 실패 여부에 따라서 화면을 렌더링하는 미들웨어 함수 입니다.
  - 리펙토링으로 인하여 코드보기가 어려워 lib를 사용하지 않고 순수하게 함수작성하는 부분이 각각 `modules/github`에 주석처리 되어있습니다.
- modules
  - github
    - actions.ts
      - `thunk`의 경우 시작에 대한 값만 알리기 떄문에 `void`처리가 되어있습니다. <br/>
        조회하는 username값은 `thunk` 함수를 통해 전달됩니다.
      - `saga`의 경우 시작 action에 조회하는 username이 포함됩니다. <br/>
        username 값은 `action.payload`의 값으로 return되어 다음 체이닝 되는 action이 연쇄적으로 사용되게 됩니다.
      - 때문에 `saga`의 경우 action type가 string으로 지정되었습니다.
- index.tsx
  - 프로젝트의 이름에 맞는 middleware가 적용된 것을 확인할 수 있습니다.

# dependencies

```shell
yarn add redux-saga
```
