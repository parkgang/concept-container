# gin-restful-api-reference

restful api 구현을 위한 hello, world code

# 환경 설정

1. config.json
   1. `database.host` 를 local mysql host으로 변경하세요.
   1. 이외의 property도 코드를 이해하고 수정하세요.
1. models의 `memo.go` 에서 테이블 자동 생성 이름을 변경할 수 있습니다.
1. 이외 혹시 모르니 `go mod tidy` 를 하면 좋습니다.

# 퀵 가이드

```shell
# mysql server를 활성화 합니다.
docker-compose up -d

# 이후 "init.sql" 으로 필요한 DB를 생성합니다.

# 프로그램을 실행합니다.
go run main.go

# "restful-api.http" 으로 api를 테스트합니다.
```

# 레퍼런스

- [Boilerplate-CRUD-GO](https://github.com/golang-crew/Boilerplate-CRUD-GO)

---

`gin-restful-api-reference` 의 이름으로 `2021-06-23` 쯤 독립적으로 되어있던 것을 해당`repo` 으로 합쳤습니다.
