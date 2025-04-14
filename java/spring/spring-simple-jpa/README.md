# 개요

아래의 스펙에 맞는 `JPA` 를 사용해 `ACC_CODE` 조회 예제 프로젝트

- Java 1.8
- org.springframework 3.1.0.RELEASE
- Maven
- Oracle DB 11.2
- JPA

`Cursor` 로 만들어진 프로젝트라 지저분한 코드가 꽤 있음

# Start

- Java 1.8, Maven 설치
- Oracle DB 준비

`src/main/resources/applicationContext.xml` 에서 OracleDB 계정 정보 입력 (`your` 으로 검색)

```shell
# Java 1.8 지정
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home"
# Tomcat 시작
~/workspaces/portable/apache-maven-3.9.9/bin/mvn tomcat7:run
```

`GET` `http://localhost:8080/api/acc-codes/org/180307N` 요청 후 결과 확인

조회하는 쿼리

```sql
select *
from ACC_CODE
where ID_ORG = ?
```

# 기타

- 오라클DB 드라이버 다운안되서 `lib/ojdbc14-10.2.0.4.0.jar` 실 제품 것 가져옴
- 시스템 구조
  - **Controller**: 클라이언트 요청 처리 및 응답 반환
  - **Service**: 비즈니스 로직 처리
  - **Repository**: 데이터베이스 접근 및 조작
  - **Entity**: 데이터 모델
