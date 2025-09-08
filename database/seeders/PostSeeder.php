<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            'title' => 'Laravel 소개',
            'content' => 'Laravel은 PHP로 작성된 웹 애플리케이션 프레임워크입니다. 우아한 문법과 강력한 기능들을 제공합니다.'
        ]);

        Post::create([
            'title' => 'MVC 패턴이란?',
            'content' => 'MVC는 Model-View-Controller의 약자로, 애플리케이션을 세 개의 주요 구성 요소로 분리하는 소프트웨어 설계 패턴입니다.'
        ]);

        Post::create([
            'title' => 'Eloquent ORM 사용법',
            'content' => 'Eloquent는 Laravel의 Active Record ORM 구현입니다. 데이터베이스 테이블과 상호작용하는 아름답고 간단한 방법을 제공합니다.'
        ]);

        Post::create([
            'title' => 'Blade 템플릿 엔진',
            'content' => 'Blade는 Laravel에 포함된 간단하지만 강력한 템플릿 엔진입니다. 템플릿 상속과 섹션을 사용하여 동적인 레이아웃을 만들 수 있습니다.'
        ]);
    }
}
