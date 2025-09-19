# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Spring Boot 2.7.18 기반의 Java 8 웹 애플리케이션으로, Apache PDFBox를 사용하여 PDF 문서에 한글 텍스트 오버레이를 수행하는 PoC 프로젝트입니다.

## 주요 명령어

### 빌드 및 실행

```bash
# 프로젝트 빌드
./gradlew build

# 애플리케이션 실행 (포트 8080)
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

# 모든 체크 실행 (테스트 포함)
./gradlew check
```

### 개발

```bash
# 개발 환경 실행 (변경사항 자동 반영)
./gradlew bootRun --continuous

# 클린 빌드
./gradlew clean build

# JAR 파일만 생성
./gradlew bootJar
```

## 아키텍처

### 애플리케이션 구조

```
src/main/java/com/example/demo/
├── DemoApplication.java              # Spring Boot 메인 클래스
├── controller/
│   └── PdfController.java           # PDF 생성 웹 컨트롤러
├── service/
│   └── PdfService.java              # PDF 텍스트 오버레이 서비스
└── dto/
    └── UserInfo.java                # 사용자 정보 DTO

src/main/resources/
├── application.properties           # 애플리케이션 설정
├── templates/
│   └── form.html                    # Thymeleaf 입력 폼 템플릿
├── fonts/
│   └── NotoSansKR-Regular.ttf      # 한글 폰트 파일
├── pdf-template.pdf                 # PDF 템플릿 파일
└── pdf-template.docx               # 참고용 템플릿 문서
```

### 핵심 기능

- **PDF 텍스트 오버레이**: 기존 PDF 템플릿에 사용자 입력 정보를 특정 좌표에 오버레이
- **한글 폰트 지원**: Noto Sans KR 폰트를 사용하여 한글 텍스트 렌더링
- **웹 인터페이스**: Thymeleaf 기반 입력 폼을 통한 사용자 정보 수집
- **파일 다운로드**: 생성된 PDF를 브라우저에서 다운로드

### 주요 기술 스택

- **Spring Boot 2.7.18**: 웹 애플리케이션 프레임워크
- **Apache PDFBox 2.0.29**: PDF 문서 조작 라이브러리
- **Thymeleaf**: 서버사이드 템플릿 엔진
- **Java 8**: 런타임 환경
- **Gradle**: 빌드 도구

### PDF 처리 로직

- `PdfService.generatePdfWithUserInfo()`: 메인 PDF 생성 로직
- 템플릿 PDF 로드 → 한글 폰트 설정 → 지정 좌표에 텍스트 오버레이 → 바이트 배열 반환
- 좌표값은 하드코딩되어 있으며 템플릿 PDF에 맞춰 조정 필요

### 개발 시 주의사항

- 한글 텍스트 처리를 위해 반드시 Noto Sans KR 폰트 사용
- PDF 좌표계는 왼쪽 하단이 원점(0,0)
- 텍스트 오버레이 좌표는 `PdfService.java`에서 수정
