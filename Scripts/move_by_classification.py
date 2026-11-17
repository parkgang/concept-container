#!/usr/bin/env python3
"""
classification.csv 의 classification 값별로 폴더를 만들고,
Original 폴더의 영상 파일을 해당 폴더로 이동합니다.

CSV 의 filename 에는 확장자가 없으므로(예: IMG_6969),
Original 폴더에서 이름이 같은 파일(.MOV, .mp4 등)을 찾아 이동합니다.

사용법:
  python3 move_by_classification.py --dry-run   # 실제 이동 없이 미리보기
  python3 move_by_classification.py             # 실제 이동
  python3 move_by_classification.py --csv ~/Downloads/classification.csv
"""

import argparse
import csv
import shutil
from collections import Counter, defaultdict
from pathlib import Path

SRC_DIR = Path(__file__).resolve().parent.parent / "Original"
DEST_DIR = SRC_DIR.parent / "Classified"
# 분류 결과 폴더 (원하면 SRC_DIR 로 바꾸세요)
DEFAULT_CSV = (
    Path(__file__).resolve().parent.parent / "Results/classification.csv"
)


def safe_folder_name(name: str) -> str:
    """폴더명으로 쓸 수 없는 문자 제거 (예: 'Not lang ko' -> 'Not lang ko')"""
    name = name.strip() or "Unclassified"
    return name.replace("/", "_").replace(":", "_")


def build_index(src_dir: Path) -> dict[str, list[Path]]:
    """파일명(확장자 제외, 대소문자 무시) -> 파일 경로 목록"""
    index = defaultdict(list)
    for p in src_dir.iterdir():
        if p.is_file() and not p.name.startswith("."):
            index[p.stem.lower()].append(p)
    return index


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", type=Path, default=DEFAULT_CSV)
    ap.add_argument("--src", type=Path, default=SRC_DIR)
    ap.add_argument("--dest", type=Path, default=DEST_DIR)
    ap.add_argument(
        "--dry-run", action="store_true", help="이동하지 않고 결과만 출력"
    )
    args = ap.parse_args()

    if not args.src.is_dir():
        raise SystemExit(f"원본 폴더를 찾을 수 없습니다: {args.src}")

    index = build_index(args.src)
    moved, missing, skipped = Counter(), [], []

    with open(args.csv, newline="", encoding="utf-8-sig") as f:
        rows = list(csv.DictReader(f))

    for row in rows:
        stem = row["filename"].strip()
        label = safe_folder_name(row["classification"])
        # filename 에 확장자가 이미 붙어 있어도 처리
        candidates = index.get(stem.lower()) or index.get(
            Path(stem).stem.lower()
        )

        if not candidates:
            missing.append(stem)
            continue

        target_dir = args.dest / label
        for (
            src
        ) in (
            candidates
        ):  # 같은 이름의 파일이 여러 확장자로 있으면 모두 이동 (예: .MOV + .AAE)
            target = target_dir / src.name
            if target.exists():
                skipped.append(f"{src.name} (대상에 이미 존재)")
                continue
            if not args.dry_run:
                target_dir.mkdir(parents=True, exist_ok=True)
                shutil.move(str(src), str(target))
            moved[label] += 1

    prefix = "[DRY-RUN] " if args.dry_run else ""
    print(f"{prefix}이동 결과 → {args.dest}")
    for label, cnt in sorted(moved.items()):
        print(f"  {label}: {cnt}개")
    print(f"  합계: {sum(moved.values())}개")

    if missing:
        print(f"\n원본 폴더에서 찾지 못한 파일: {len(missing)}개")
        for s in missing[:20]:
            print(f"  - {s}")
        if len(missing) > 20:
            print(f"  ... 외 {len(missing) - 20}개")
    if skipped:
        print(f"\n건너뜀: {len(skipped)}개")
        for s in skipped[:20]:
            print(f"  - {s}")


if __name__ == "__main__":
    main()
