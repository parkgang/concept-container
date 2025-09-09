## 📋 개요

**Laravel 기본 학습 프로젝트** - Laravel 프레임워크의 MVC 패턴과 데이터베이스 연동을 실습할 수 있는 게시물 관리 시스템입니다.

### ✨ 이 프로젝트에서 배울 수 있는 것들
- **MVC 패턴**: Model-View-Controller 구조의 실제 구현
- **Eloquent ORM**: Laravel의 데이터베이스 ORM 사용법
- **Blade 템플릿**: Laravel의 템플릿 엔진 활용
- **라우팅**: URL과 컨트롤러 메서드 매핑
- **마이그레이션**: 데이터베이스 스키마 관리
- **시더**: 샘플 데이터 생성 및 관리

### 🎯 구현된 기능
- **게시물 목록 보기** (`/posts`): 4개의 Laravel 학습 관련 게시물
- **게시물 상세 보기** (`/posts/{id}`): 개별 게시물 내용과 Laravel 데이터 흐름 설명

## 🔧 프로젝트 생성 과정

```bash
laravel new laravel-basic-understand
# 이후 모두 기본 값으로 설정
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

## 🚀 Quick Start

### 전제 조건
- **PHP**: 8.2+ (권장: 8.4)
- **Composer**: 2.8+
- **Node.js**: 22.18.0+
- **Laravel**: 12

### 🛠️ 초기 설정 (필수!)

⚠️ **중요**: 프로젝트를 처음 클론한 경우, 다음 명령어들을 **반드시** 순서대로 실행해야 합니다:

```bash
# 1. 의존성 설치
composer install
npm install

# 2. 환경 설정 파일 생성
cp .env.example .env

# 3. 애플리케이션 키 생성
php artisan key:generate

# 4. SQLite 데이터베이스 파일 생성
touch database/database.sqlite

# 5. 데이터베이스 테이블 생성
php artisan migrate

# 6. 샘플 데이터 생성 (Laravel 학습용 게시물 4개)
php artisan db:seed --class=PostSeeder
```

### ▶️ 서버 실행

```bash
# 권장: 통합 개발 환경 (Laravel 서버 + Vite)
composer dev

# 또는 개별 실행
php artisan serve  # Laravel 서버만
npm run dev       # Vite 개발 서버만
```

### 🌐 접속하기

- **메인 페이지**: http://localhost:8000
- **게시물 목록**: http://localhost:8000/posts ← **여기서 시작하세요!**

### 🔧 문제 해결

**500 에러가 발생하나요?**
위의 "초기 설정" 단계를 빠뜨리지 않았는지 확인하세요. 특히:
- `.env` 파일 존재 여부
- `database/database.sqlite` 파일 존재 여부
- 마이그레이션 실행 여부
