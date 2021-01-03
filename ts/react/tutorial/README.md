# Hi

ts환경에서 react component 만들기 hook 사용하기와 같은 기초적인 예제 코드가 삽입되어있습니다.

# 하이어라키

## components

| 파일          | 렌더링 코드                                                                    | 설명                                                                                             |
| ------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Greetings.tsx | `<components.Greetings name={'박경은'} onClick={() => console.log('test')} />` | ts기반 react component 생성코드 (React.FC 사용한것과 type을 직접 지정한 2가지 방법이 존재합니다) |
| Counter.tsx   | `<components.Counter />`                                                       | useState을 이용한 카운터                                                                         |

| MyForm.tsx | `<components.MyForm onSubmit={onSubmit} />` | input 상태 관리하기 (입력되는 값을 state으로 처리합니다) |
| CounterReducer.tsx | `<components.CounterReducer />` | 카운터를 useReducer로 구현 |
| ReducerSample.tsx | `<components.ReducerSample />` | 구체적인 type를 적용된 useReducer |
| RefSample.tsx | `<components.RefSample onSubmit={onSubmit} />` | input에 focus되도록 useRef 사용 |
