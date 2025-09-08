<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $post->title }} - {{ config('app.name', 'Laravel') }}</title>
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] dark:text-[#EDEDEC] min-h-screen">
        <div class="container mx-auto px-6 py-8 max-w-4xl">
            <!-- 헤더 -->
            <div class="mb-8">
                <div class="flex gap-4 mb-6">
                    <a href="{{ route('posts.index') }}" 
                       class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        ← 목록으로
                    </a>
                    <a href="{{ url('/') }}" 
                       class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        홈으로
                    </a>
                </div>
                
                <h1 class="text-3xl font-bold mb-4">{{ $post->title }}</h1>
                <div class="text-sm text-gray-500 dark:text-[#A1A09A] mb-6">
                    <span>작성일: {{ $post->created_at->format('Y년 m월 d일 H:i') }}</span>
                    @if($post->updated_at->ne($post->created_at))
                        <span class="ml-4">수정일: {{ $post->updated_at->format('Y년 m월 d일 H:i') }}</span>
                    @endif
                </div>
            </div>

            <!-- 게시물 내용 -->
            <div class="bg-white dark:bg-[#161615] border border-gray-200 dark:border-[#3E3E3A] rounded-lg p-8 shadow-sm">
                <div class="prose prose-lg max-w-none dark:prose-invert">
                    <div class="whitespace-pre-wrap leading-relaxed">{{ $post->content }}</div>
                </div>
            </div>

            <!-- 네비게이션 -->
            <div class="mt-8 p-6 bg-gray-50 dark:bg-[#161615] border border-gray-200 dark:border-[#3E3E3A] rounded-lg">
                <h3 class="text-lg font-semibold mb-4">관련 기능</h3>
                <div class="flex flex-wrap gap-4">
                    <a href="{{ route('posts.index') }}" 
                       class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        다른 게시물 보기
                    </a>
                    <span class="px-4 py-2 bg-gray-200 dark:bg-[#3E3E3A] rounded-lg text-gray-600 dark:text-[#A1A09A]">
                        게시물 ID: {{ $post->id }}
                    </span>
                </div>
            </div>

            <!-- 데이터베이스 정보 표시 (학습용) -->
            <div class="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h3 class="text-lg font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
                    🔍 Laravel 데이터 흐름 (학습용 정보)
                </h3>
                <div class="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                    <p><strong>1. 라우트:</strong> /posts/{{ $post->id }} → PostController@show</p>
                    <p><strong>2. 모델:</strong> Post::find({{ $post->id }}) → SQLite 데이터베이스 조회</p>
                    <p><strong>3. 컨트롤러:</strong> PostController가 데이터를 뷰에 전달</p>
                    <p><strong>4. 뷰:</strong> posts/show.blade.php에서 HTML 렌더링</p>
                    <p><strong>5. 응답:</strong> 클라이언트(브라우저)에게 HTML 반환</p>
                </div>
            </div>

            <!-- 푸터 -->
            <div class="mt-12 pt-8 border-t border-gray-200 dark:border-[#3E3E3A] text-center">
                <p class="text-sm text-gray-500 dark:text-[#A1A09A]">
                    Laravel {{ app()->version() }}로 구현된 게시물 시스템 - MVC 패턴 예제
                </p>
            </div>
        </div>
    </body>
</html>