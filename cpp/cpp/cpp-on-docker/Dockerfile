FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y \
        # `g++` 와 같은 C++ 컴파일러와 필요한 빌드 도구를 포함하는 패키지
        build-essential \
        # C++ 디버깅을 위함: 해당 패키지를 설치해야 C/C++ 확장에서 손쉽게 실행할 수 있도록 UI 제공
        gdb

# 컨테이너가 계속 실행되도록 설정
CMD tail -f /dev/null
