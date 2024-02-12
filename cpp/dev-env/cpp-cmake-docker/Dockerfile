FROM ubuntu:22.04

RUN apt-get update

# 유틸 패키지
RUN apt-get install -y git neovim

# C++ 관련 패키지
RUN apt-get install -y \
        # `g++` 와 같은 C++ 컴파일러와 필요한 빌드 도구를 포함하는 패키지
        build-essential \
        # C++ 디버깅을 위함: 해당 패키지를 설치해야 C/C++ 확장에서 손쉽게 실행할 수 있도록 UI 제공
        gdb \
        # 복잡한 컴파일 과정을 단순화하기 위한 빌드 시스템
        cmake

# 컨테이너가 계속 실행되도록 설정
CMD tail -f /dev/null
