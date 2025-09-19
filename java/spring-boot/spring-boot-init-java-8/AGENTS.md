# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Spring Boot 2.7.18 기반의 Java 8 웹 애플리케이션입니다.

## 주요 명령어

### 빌드 및 실행

```bash
# 프로젝트 빌드
./gradlew build

# 애플리케이션 실행
./gradlew bootRun

# 또는 빌드된 JAR 파일 실행
java -jar build/libs/demo-0.0.1-SNAPSHOT.jar
```

### 테스트

```bash
# 전체 테스트 실행
./gradlew test

# 테스트 클래스만 컴파일
./gradlew testClasses

# 모든 체크 실행
./gradlew check
```

### 개발

```bash
# 개발 환경 빌드 (변경사항 자동 반영)
./gradlew bootRun --continuous

# 클린 빌드
./gradlew clean build
```

## 아키텍처

### 디렉토리 구조

```
src/
├── main/
│   ├── java/com/example/demo/
│   │   └── DemoApplication.java      # Spring Boot 메인 클래스
│   └── resources/
│       └── application.properties    # 애플리케이션 설정
└── test/
    └── java/com/example/demo/
        └── DemoApplicationTests.java # 테스트 클래스
```

### 주요 특징

- **Spring Boot 2.7.18**: 스프링 부트 기반 웹 애플리케이션
- **Java 8**: Java 8 런타임 환경 사용
- **Gradle**: 빌드 도구로 Gradle 사용
- **JUnit Platform**: 테스트 프레임워크
- **Spring Boot DevTools**: 개발 시 자동 재시작 지원

### 포트 및 설정

- 기본 포트: 8080 (application.properties에서 변경 가능)
- 애플리케이션 이름: demo
