<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>게시물 목록 - {{ config('app.name', 'Laravel') }}</title>
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] dark:text-[#EDEDEC] min-h-screen">
        <div class="container mx-auto px-6 py-8 max-w-4xl">
            <!-- 헤더 -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold mb-4">게시물 목록</h1>
                <div class="flex gap-4">
                    <a href="{{ route('posts.index') }}" 
                       class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        목록
                    </a>
                    <a href="{{ url('/') }}" 
                       class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        홈으로
                    </a>
                </div>
            </div>

            <!-- 게시물 목록 -->
            <div class="space-y-6">
                @forelse($posts as $post)
                    <div class="bg-white dark:bg-[#161615] border border-gray-200 dark:border-[#3E3E3A] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div class="mb-4">
                            <h2 class="text-xl font-semibold mb-2">
                                <a href="{{ route('posts.show', $post) }}" 
                                   class="text-blue-600 dark:text-blue-400 hover:underline">
                                    {{ $post->title }}
                                </a>
                            </h2>
                            <p class="text-gray-600 dark:text-[#A1A09A] line-clamp-3">
                                {{ Str::limit($post->content, 200) }}
                            </p>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500 dark:text-[#A1A09A]">
                                {{ $post->created_at->format('Y년 m월 d일') }}
                            </span>
                            <a href="{{ route('posts.show', $post) }}" 
                               class="px-4 py-2 text-sm bg-gray-100 dark:bg-[#3E3E3A] rounded-lg hover:bg-gray-200 dark:hover:bg-[#62605b] transition-colors">
                                자세히 보기
                            </a>
                        </div>
                    </div>
                @empty
                    <div class="bg-white dark:bg-[#161615] border border-gray-200 dark:border-[#3E3E3A] rounded-lg p-8 text-center">
                        <p class="text-gray-500 dark:text-[#A1A09A]">등록된 게시물이 없습니다.</p>
                    </div>
                @endforelse
            </div>

            <!-- 푸터 -->
            <div class="mt-12 pt-8 border-t border-gray-200 dark:border-[#3E3E3A] text-center">
                <p class="text-sm text-gray-500 dark:text-[#A1A09A]">
                    Laravel {{ app()->version() }}로 구현된 게시물 시스템
                </p>
            </div>
        </div>
    </body>
</html>