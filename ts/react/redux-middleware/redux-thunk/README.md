# Hi

react에서 redux를 사용하는 다양한 방법을 정리한 프로젝트입니다.

# 하이어 라키

## components

해당 프로젝트는 `Counter`, `Todo` 두가지 App이 존재합니다.  
필요한 App을 `App.tsx`에 수정하여 렌더링 하면 됩니다.

### Counter

```ts
<>
  <components.Counter />
</>
```

### Todo

```ts
<>
  <components.TodoInsert />
  <components.TodoList />
</>
```

## hooks

커스텀 hook이 저장되어 있습니다. `modules` 의존관계 입니다.

> `modules`에서 `vanilla-react-redux`을 사용하는 case를 test한다면 hook과 modules의 index에서 import 모듈도 같이 변경해야 테스트에 의의가 있습니다.

## modules

해당 프로젝트의 redux 코어 로직이 있는 부분입니다.

총 3가지 형태로 저장이 되어있습니다.

| 디렉토리명 or 파일명 | 역할                                                                                                                                                                                                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vanilla-react-redux  | Ducks 패턴으로 작성됬으며 `typesafe-actions`을 적용하지 않은 순수한 react-redux 입니다. redux가 react.tsx에서 어떤 메커니즘으로 돌아가는지 확인하기 좋습니다. 또한, `typesafe-actions` 리펙토링 전과 후를 비교하기 좋습니다. counter.ts에는 제네릭을 활용해 액션 생성 함수의 return 값이 지정되어있습니다. |
| todos                | `typesafe-actions` 으로 리펙토링 되었습니다. 또한, Ducks 패턴을 포기하고 `typesafe-actions`의 각각의 모듈 특성에 맞게 파일을 분리한 형태입니다.                                                                                                                                                            |
| counter.ts           | `typesafe-actions` 으로 리펙토링 되었습니다. 액션이 몇개 없는 간단한 redux 모듈이므로 Ducks 패턴으로 작성되어있습니다. (여러 case를 보기 위한 의도된 디자인)                                                                                                                                               |

> 결과적으로 Ducks 패턴, `typesafe-actions` 적용 유무와 관계 없이 `Counter`, `Todo`의 동작은 **모두 완벽히 동일합니다.** 여러 case를 보기 위해 따로 저장되어있는 형태입니다.
