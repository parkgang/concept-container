# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 프로젝트는 Laravel 12 웹 애플리케이션으로, Vite와 Tailwind CSS 4를 사용하여 프론트엔드 자산을 관리합니다.

## 개발 명령어

### 백엔드 (Laravel)
- `composer dev`: 개발 서버 실행 (서버, 큐, 로그, Vite를 동시 실행)
- `php artisan serve`: Laravel 개발 서버만 실행
- `composer test`: 테스트 실행 (config 초기화 후 artisan test)
- `php artisan test`: 직접 테스트 실행
- `php artisan migrate`: 데이터베이스 마이그레이션
- `php artisan queue:work`: 큐 워커 실행
- `php artisan pail`: 실시간 로그 보기

### 프론트엔드 (Vite + Node.js)
- `npm run dev`: Vite 개발 서버 실행
- `npm run build`: 프로덕션 빌드

### 통합 개발 환경
- `composer dev`: 권장되는 개발 명령어 (모든 서비스를 동시 실행)

## 코드 품질 도구

- **PHP**: Laravel Pint (코드 스타일링)
- **Testing**: Pest 4 (PHP 테스팅 프레임워크)
- **Frontend**: Vite (빌드 도구), Tailwind CSS 4 (스타일링)

## 아키텍처 구조

### 백엔드 (Laravel MVC)
- `app/`: 애플리케이션 로직 (Models, Controllers, Services 등)
- `routes/web.php`: 웹 라우트 정의
- `database/migrations/`: 데이터베이스 스키마 변경
- `database/seeders/`: 초기 데이터
- `config/`: 애플리케이션 설정

### 프론트엔드 자산
- `resources/css/app.css`: 메인 CSS 파일 (Tailwind 진입점)
- `resources/js/app.js`: 메인 JavaScript 파일
- `resources/views/`: Blade 템플릿
- `public/`: 컴파일된 자산 및 정적 파일

### 테스트
- `tests/`: Pest 테스트 파일들
- `phpunit.xml`: PHPUnit/Pest 설정

## 환경 설정

- `.env`: 환경 변수 (로컬 개발용)
- `.env.example`: 환경 변수 템플릿
- SQLite 데이터베이스 사용 (`database/database.sqlite`)

## 주요 의존성

- Laravel Framework 12
- PHP 8.2+
- Vite 7
- Tailwind CSS 4
- Pest 4 (테스팅)
- Axios (HTTP 클라이언트)