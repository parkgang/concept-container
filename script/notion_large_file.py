"""
Notion에서 내보낸 데이터 중 가장 큰 파일 출력하는 스크립트
"""

import os

# 압축 푼 디렉토리 경로 입력
NOTION_EXPORT_DIR = "Export-da382e3c-51fa-46d3-83ff-198d93e14768"
# 필터링 파일 용량(MB)
FILTER_FILE_SIZE = 0
# 출력할 상위 파일 개수
TOP_N = 10


def get_largest_files(directory, top_n):
    """가장 큰 파일 출력"""
    file_sizes = []

    for root, _, files in os.walk(directory):
        for file in files:
            full_path = os.path.join(root, file)
            try:
                size = os.path.getsize(full_path)
                file_sizes.append((full_path, size))
            except FileNotFoundError:
                pass  # 혹시 파일이 삭제된 경우 대비

    file_sizes.sort(key=lambda x: x[1], reverse=True)

    print(f"Top {top_n} largest files:")
    for i, (path, size) in enumerate(file_sizes[:top_n], 1):
        if size > FILTER_FILE_SIZE * 1024 * 1024:
            print(f"{i}. {path} - {size / (1024 * 1024):.2f} MB")


get_largest_files(NOTION_EXPORT_DIR, TOP_N)
