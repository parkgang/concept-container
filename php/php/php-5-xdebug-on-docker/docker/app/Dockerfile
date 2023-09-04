FROM php:5.5.25-apache

# Xdebug 컴파일을 위해서 소스코드 clone를 위해 git을 설치하려고 `apt-get update` 하니까
# Err http://security.debian.org jessie/updates/main amd64 Packages
# 오류가 발생해서 https://knight76.tistory.com/entry/Failed-to-fetch-httpdebdebianorgdebiandistsjessie-updatesInRelease-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0 방법을 따라 `/etc/apt/sources.list` 를 수정
COPY ./docker/app/apt-sources.list /etc/apt/sources.list

RUN \
    # 업데이트 중 일부분은 실패하는데 `git` 설치하는 것이 목적이기 때문에 무시하고 진행
    apt-get update || true \
    # git 설치
    && apt-get install -y --force-yes git \
    # 혹시라도 컨테이너 안에서 텍스트 편집 손쉽게 달성하기 위해서 설치
    && apt-get install -y --force-yes vim

WORKDIR /tmp
RUN git clone https://github.com/xdebug/xdebug.git

WORKDIR /tmp/xdebug
# PHP5에 호환되는 Xdebug 버전으로 체크아웃
RUN git checkout tags/2.2.7
# Xdebug 컴파일
RUN /usr/local/bin/phpize
RUN ./configure --enable-xdebug --with-php-config=/usr/local/bin/php-config
RUN make
# php에 Xdebug 확장으로 지정
RUN cp modules/xdebug.so /usr/local/lib/php/extensions

# php.ini에 Xdebug 확장 추가
COPY ./docker/app/php.ini /usr/local/etc/php/php.ini

# 모듈이 설치되었는지 확인
RUN php -m | grep Xdebug || (echo "Xdebug가 로드되지 않았습니다." && exit 1)

# 아파치 서버 재시작하여 반영
# 이걸 하지 않으면 아래의 오류가 발생함
# AH00526: Syntax error on line 3 of /etc/apache2/apache2.conf:
# Invalid Mutex directory in argument file:/var/lock/apache2
# 근데 어짜피 아파치로 실행되는 PHP에 반영하려면 재시작이 필요함
# 이외 `service` 으로 시작하는 방법도 찾음: https://askubuntu.com/a/800217
RUN apachectl restart
