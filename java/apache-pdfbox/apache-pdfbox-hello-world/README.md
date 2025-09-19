## 개요

- Java@8, Spring Boot@2.7.18 환경
- PDF에 텍스트 오버레이(overlay) PoC 프로젝트 입니다.
- 한글 표시를 위해 https://fonts.google.com/noto/specimen/Noto+Sans+KR 에서 다운로드 후 [fonts](./src/main/resources/fonts) 경로에
  배치하였습니다.
- 만들어진 PDF 문서는 [pdf-template.docx](./src/main/resources/pdf-template.docx) 에서 참고할 수 있습니다.

## Start

### 프로그램 시작

```shell
./gradlew bootRun
```

### PDF 디버깅 방법(좌표 찍어서 볼 수 있음)

https://pdfbox.apache.org/download.html 에서 `debugger-app-*.jar` 다운

아래의 명령으로 수행

```shell
java -jar ~/Downloads/debugger-app-3.0.5.jar ./src/main/resources/pdf-template.pdf
```