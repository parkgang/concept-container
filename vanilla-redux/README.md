# 사전 작업

`yarn add redux`

`import { createStore } from "redux";`

# Redux 정리노트

## store

Data를 넣는 곳(state를 나타냄)
또한, Web Appliaction에서 바뀌는 Data를 의미함

store는 reducer를 반드시 필요로 함

## reducer

함수의 형태이며 이걸 이용해서만 데이터 수정이 가능함

> 유일하게 data를 바꿀 수 있는 공간

뭐든지 return되는 value는 나의 application의 data가 된다
덕분에 data는 기본적으로 한 곳에만 존재함

reducer를 이용해 데이터를 수정하기 위해서는 action이 사용됨