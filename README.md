# Front-end-practice

Front-end Web 개발 연습

# 진척도

| 챕터 | 진행상황 |
| --- | --- |
| html | 완료 |
| css | [2.18 CSS3 Layout](https://poiemaweb.com/css3-layout) 진행하다 멈춤 history 2020.09.17 |
| js | [5.18](https://poiemaweb.com/js-execution-context) <br> [5.19](https://poiemaweb.com/js-closure) <br> [5.20 - 6. 부터 진행](https://poiemaweb.com/js-object-oriented-programming#6-%EC%BA%A1%EC%8A%90%ED%99%94encapsulation%EC%99%80-%EB%AA%A8%EB%93%88-%ED%8C%A8%ED%84%B4module-pattern) <br> 진행 중 |
| node.js | 진행 전 |
| Express | 진행 전 |
| ts | 진행 전 |


# Commit message 규칙

## 1. Commit Message Structure

기본적으로 커밋 메세지는 아래와 같이 제목 / 본문 / 꼬리말로 구성합니다.

```
type: subject

body

footer
```

## 2. Commit Type

| Type     | 내용                                                   |
| -------- | ------------------------------------------------------ |
| feat     | 새로운 기능 추가                                       |
| fix      | 버그 수정, 기능 수정                                   |
| docs     | 문서 수정                                              |
| refactor | 코드 리팩토링 (변수명 수정 등)                         |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가                 |
| style    | 코드 스타일 변경, 코드 자체 변경이 없는 경우           |
| remove   | 파일 또는 코드, 리소스 제거                            |
| resource | 이미지 리소스, prefab 등의 코드와 상관없는 리소스 추가 |

## 3. Subject

- 제목은 50자를 넘기지 않고, 대문자로 작성하고 마침표를 붙이지 않습니다.
- 과거시제를 사용하지 않고 명령어로 작성합니다.

```
feat : Add translation to missing strings
feat : Disable publishing
feat : Sort list context menu
feat : Resize minimize/delete handle icons so they take up the entire topbar
fix : Fix typo in cleanup.sh file
```

## 4. Body

- 선택사항이기 때문에 모든 커밋에 본문내용을 작성할 필요는 없습니다.
- 부연설명이 필요하거나 커밋의 이유를 설명할 경우 작성합니다.
- 제목과 구분되기 위해 한칸을 띄워 작성합니다.
- 각 줄은 72자를 넘기지 않습니다.
- 본문은 꼭 영어로 작성할 필요는 없습니다.

## 5. Footer

- 선택사항이기 때문에 모든 커밋에 꼬리말을 작성할 필요는 없습니다.
- 등록된 이슈 ID를 트래킹할 때 주로 사용합니다.

## 6. Example Commit Message

```
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```
