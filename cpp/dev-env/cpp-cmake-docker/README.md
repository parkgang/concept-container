`C++` 코드를 실행하고 디버깅할 수 있는 예제 환경입니다.

`CMake` 를 이용해 여러 파일을 컴파일하고 디버깅할 수 있습니다.

## 시작 방법

`VSCode` 으로 실행하면 `Dev Containers` 를 이용하여 손쉽게 접근할 수 있습니다.

기초적인 에제를 위해서 [sample](sample) 이 존재합니다.

- [alone-main.cpp](./sample/alone-main.cpp) 는 `include` 없는 코드로 `VSCode` 의 `task` 를 통해 단독 파일이 컴파일 및 실행되는 것을 볼 수 있습니다.
- [main.cpp](./sample/main.cpp) 는 `cmake` 를 통해 `include` 된 파일도 함께 실행되는 것을 볼 수 있습니다.
