## 개요

라라벨 프레임워크의 기본적인 구조를 볼 수 있는 프로젝트입니다.

## 프로젝트 생성 과정

```bash
laravel new example-app
# 이후 모두 기본 값
```

## 들어간 예제 기능

> Git Log 보는 것을 추천합니다.

구현된 Laravel Client-Server 동작 방식

📊 데이터 흐름

1. 사용자 요청: /posts 접속
2. 라우트 처리: routes/web.php에서 PostController@index 호출
3. 컨트롤러 로직: PostController가 Post 모델을 통해 데이터베이스 조회
4. 데이터베이스 접근: SQLite에서 posts 테이블 데이터 조회 (Eloquent ORM 사용)
5. 뷰 렌더링: posts/index.blade.php에서 데이터를 HTML로 변환
6. 클라이언트 응답: 브라우저에 완성된 HTML 전달

🗂️ 생성된 파일들

-   모델: app/Models/Post.php - 데이터베이스 테이블과 상호작용
-   마이그레이션: database/migrations/2025_09_08_140635_create_posts_table.php -
    posts 테이블 구조 정의
-   시더: database/seeders/PostSeeder.php - 샘플 데이터 4개 생성
-   컨트롤러: app/Http/Controllers/PostController.php - 비즈니스 로직 처리
-   라우트: routes/web.php - URL과 컨트롤러 메서드 매핑
-   뷰: resources/views/posts/index.blade.php, posts/show.blade.php - 사용자
    인터페이스

🎯 주요 기능

1. 게시물 목록: /posts - 모든 게시물을 최신 순으로 표시
2. 게시물 상세: /posts/{id} - 특정 게시물 내용과 Laravel 데이터 흐름 설명
3. 홈페이지 연결: "게시물 보기" 버튼으로 접근 가능

이제 composer dev 명령어로 개발 서버를 실행하고 http://localhost:8000/posts에서
Laravel의 MVC 패턴과 데이터베이스 연동을 직접 경험해보실 수 있습니다!

## Start

1. PHP@8.4, Composer@2.8.11, Node.js@22.18.0, Laravel@12 설치
1. `composer run dev` 으로 실행
1. http://localhost:8000/posts 보기
