# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 프로젝트는 Laravel 12 웹 애플리케이션으로, Laravel의 MVC 패턴과 데이터베이스 연동을 학습할 수 있는 게시물 관리 시스템이 구현되어 있습니다. Vite와 Tailwind CSS 4를 사용하여 프론트엔드 자산을 관리합니다.

## 구현된 기능

### 게시물 관리 시스템 (MVC 예제)
- **URL**: `/posts` (목록), `/posts/{id}` (상세)
- **모델**: `Post` (title, content 필드)
- **컨트롤러**: `PostController` (index, show 메서드)
- **뷰**: Tailwind CSS로 스타일링된 반응형 템플릿
- **데이터**: 4개의 Laravel 학습 관련 샘플 게시물

### 데이터 흐름 (Client-Server)
1. 브라우저 요청 → 2. 라우트 처리 → 3. 컨트롤러 로직 → 4. 모델(DB 조회) → 5. 뷰 렌더링 → 6. HTML 응답

## 개발 명령어

### 빠른 시작 (프로젝트 초기 설정)
**⚠️ 새로운 개발자 주의사항**: 프로젝트를 처음 클론한 경우 다음 초기 설정이 필요합니다:

```bash
# 1. 환경 설정 파일 생성
cp .env.example .env

# 2. 애플리케이션 키 생성
php artisan key:generate

# 3. SQLite 데이터베이스 파일 생성
touch database/database.sqlite

# 4. 데이터베이스 마이그레이션 실행
php artisan migrate

# 5. 샘플 데이터 생성
php artisan db:seed --class=PostSeeder
```

**정상 실행**:
- `composer dev`: **권장** 통합 개발 환경 (서버, 큐, 로그, Vite 동시 실행)
- 브라우저에서 `http://localhost:8000/posts` 접속하여 게시물 시스템 확인

### 개별 명령어
- `php artisan serve`: Laravel 개발 서버만 실행
- `npm run dev`: Vite 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `composer test`: 테스트 실행 (config 초기화 후 artisan test)
- `php artisan migrate`: 데이터베이스 마이그레이션
- `php artisan db:seed --class=PostSeeder`: 샘플 게시물 데이터 추가

## 코드 품질 도구

- **PHP**: Laravel Pint (코드 스타일링)
- **Testing**: Pest 4 (PHP 테스팅 프레임워크)
- **Frontend**: Vite (빌드 도구), Tailwind CSS 4 (스타일링)

## 아키텍처 구조

### 핵심 MVC 컴포넌트
- **모델**: `app/Models/Post.php` - Eloquent ORM으로 posts 테이블과 상호작용
- **컨트롤러**: `app/Http/Controllers/PostController.php` - 게시물 비즈니스 로직
- **뷰**: `resources/views/posts/` - Blade 템플릿 (index.blade.php, show.blade.php)
- **라우트**: `routes/web.php` - RESTful URL 매핑

### 데이터베이스 구조
- **마이그레이션**: `database/migrations/2025_09_08_140635_create_posts_table.php`
- **시더**: `database/seeders/PostSeeder.php` - Laravel 학습용 샘플 데이터
- **SQLite**: `database/database.sqlite` - 로컬 개발용 데이터베이스

### 프론트엔드
- `resources/css/app.css`: Tailwind CSS 4 진입점
- `resources/views/welcome.blade.php`: 홈페이지 (게시물 링크 포함)
- `vite.config.js`: Vite 빌드 설정

## 개발 환경 요구사항

- **PHP**: 8.2+ (현재 8.4 사용)
- **Composer**: 2.8.11+
- **Node.js**: 22.18.0+
- **Laravel**: 12
- **데이터베이스**: SQLite (개발용)

## 주요 기술 스택

- **백엔드**: Laravel 12 + Eloquent ORM + Pest 4 (테스팅)
- **프론트엔드**: Vite 7 + Tailwind CSS 4
- **도구**: Laravel Pint (코드 스타일링), Axios (HTTP 클라이언트)

## 문제 해결 가이드

### 일반적인 초기 설정 문제들

**1. 500 Internal Server Error 발생 시**
- 원인: 초기 설정이 완료되지 않음
- 해결: 위의 "빠른 시작 (프로젝트 초기 설정)" 단계를 순서대로 실행

**2. SQLite 관련 에러**
```
Database file at path [.../database.sqlite] does not exist
```
- 해결: `touch database/database.sqlite` 명령으로 데이터베이스 파일 생성

**3. APP_KEY 관련 에러**
- 해결: `php artisan key:generate` 명령으로 애플리케이션 키 생성

**4. 마이그레이션 에러**
- 해결: 데이터베이스 파일 생성 후 `php artisan migrate` 실행

**5. 빈 페이지 또는 데이터 없음**
- 해결: `php artisan db:seed --class=PostSeeder` 명령으로 샘플 데이터 생성

## 학습 목적

이 프로젝트는 Laravel의 핵심 개념을 학습하기 위해 설계되었습니다:
- MVC 패턴의 실제 구현
- Eloquent ORM을 통한 데이터베이스 상호작용
- Blade 템플릿 엔진 사용법
- Laravel의 라우팅 시스템
- 마이그레이션과 시더를 통한 데이터베이스 관리