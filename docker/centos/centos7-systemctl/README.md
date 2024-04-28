## 개요

`CentOS 7` 을 `Docker` 으로 사용하면서 `systemctl` 를 사용하는 예제입니다.

별도의 설정을 하지 않고 사용하면 `systemctl` 호출 시 `Failed to get D-Bus connection: No such file or directory` 에러가 발생합니다.

## 사전 조건

`Windows` 의 경우 그냥 사용하면 되지만 `macOS` 인 경우는 아래의 설정 값을 `true` 으로 바꾼뒤 `Docker` 를 종료 후 시작해야합니다.(재시작 안됨)

```shell
vim ~/Library/Group\ Containers/group.com.docker/settings.json

{
  ...
  "deprecatedCgroupv1": true
  ...
}
```

## Start

```shell
docker-compose build
docker-compose up -d
docker-compose exec playground /bin/bash
# 컨테이너 내부에서 아래의 명령어 호출되는지 확인
systemctl status
# at이 잘 동작하는지 확인하려면 아래의 명령 수행하고 지정한 디렉터리에 파일 생성되는지 확인
echo "sleep 5; echo 'Hello World' > /tmp/test.txt" | at now
```
