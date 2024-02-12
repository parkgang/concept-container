FROM ubuntu:22.04

RUN apt-get update

# 유틸 패키지
RUN apt-get install -y git neovim 

# MS 패키지 리포지토리 등록을 위해 사용되는 패키지 설치
RUN apt-get install -y \
    wget \
    lsb-release

# MS 패키지 리포지토리 등록: bash 기반에서 수행되어 따로 분리
WORKDIR /tmp
COPY ./register-the-microsoft-package-repository.sh .
RUN /bin/bash ./register-the-microsoft-package-repository.sh

RUN apt install -y dotnet-sdk-8.0

# 컨테이너가 계속 실행되도록 설정
CMD tail -f /dev/null
