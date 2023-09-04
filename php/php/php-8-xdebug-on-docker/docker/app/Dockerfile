FROM php:8-apache

RUN apt-get update \
   # 디버깅 관련
   && pecl install xdebug \
   && docker-php-ext-enable xdebug

# 설정 관련 파일 복사
COPY ./docker/app/php.ini /usr/local/etc/php/php.ini
COPY ./docker/app/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini