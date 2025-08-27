## 개요

`Oracle Database 23ai Free Release 23.0.0.0.0 - Develop, Learn, and Run for Free` Docker에서 실행 방법입니다.

## 실행 방법

> docker 외부에서도 접속 가능합니다.

```shell
docker compose up -d

# 컨테이너 내부 접속
docker-compose exec -it db bash

# 비밀번호 초기화
./setPassword.sh {your_password}

# 데이터베이스 접속
sqlplus
# ID: system
# PW: {your_password}
# SID: FREE
```

## Reference

- https://www.oracle.com/kr/database/free/
- https://container-registry.oracle.com/ords/f?p=113:4:10174736083168:::4:P4_REPOSITORY,AI_REPOSITORY,AI_REPOSITORY_NAME,P4_REPOSITORY_NAME,P4_EULA_ID,P4_BUSINESS_AREA_ID:1863,1863,Oracle%20Database%20Free,Oracle%20Database%20Free,1,0&cs=3kA6wuRV5XqiiAh59hmbfCAOwxUg7Vt0D35fY4VaVGX1Bw2-HrIgMBlFfneYyzjizba9Fs7YWjzBrmNcswdWPig
