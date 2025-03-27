"""
Export된 Notion 파일 중 가장 큰 용량을 차지하는 page를 출력하는 스크립트
상단에 있는 파라미터 입력 후 실행
이를 통해 Notion 워크스페이스에서 가장 많은 용량을 차지하는 페이지를 찾을 수 있음
"""

import os
from pathlib import Path

# 압축 풀은 Notion export 경로
EXPORT_PATH = "Export-da382e3c-51fa-46d3-83ff-198d93e14768"
# 출력 리스트 개수
TOP_N = 50
# 필터링 용량 (MB)
MIN_SIZE_MB = 100


def get_leaf_directories(root: Path):
    """하위 디렉토리가 없는 디렉토리 목록 반환"""
    leaf_dirs = []

    for dirpath, dirnames, _ in os.walk(root):
        if not dirnames:  # 하위 디렉토리가 없으면 leaf
            leaf_dirs.append(Path(dirpath))

    return leaf_dirs


def get_directory_size(directory: Path):
    """디렉토리 내 모든 파일의 총 크기(바이트)를 계산하여 반환"""
    return sum(f.stat().st_size for f in directory.rglob("*") if f.is_file())


def list_heavy_leaf_dirs(root: Path, top_n: int = TOP_N):
    """하위 디렉토리가 없는 디렉토리 중 가장 큰 것을 찾아 출력"""
    leaf_dirs = get_leaf_directories(root)
    dir_sizes = [(d, get_directory_size(d)) for d in leaf_dirs]

    # 용량 기준으로 내림차순 정렬
    dir_sizes.sort(key=lambda x: x[1], reverse=True)

    # 용량 필터링
    min_size_bytes = MIN_SIZE_MB * 1024 * 1024
    dir_sizes = [
        (path, size) for path, size in dir_sizes if size >= min_size_bytes
    ]

    print(f"{'Leaf Directory':<60} {'Size (MB)':>10}")
    print("-" * 75)
    for path, size in dir_sizes[:top_n]:
        print(
            f"{str(path.relative_to(root)):<60} {size / (1024 * 1024):>10.2f}"
        )


if __name__ == "__main__":
    EXPORT_PATH = Path(EXPORT_PATH)
    list_heavy_leaf_dirs(EXPORT_PATH)
