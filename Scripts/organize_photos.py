import re
import subprocess
from collections import defaultdict
from pathlib import Path

import osxphotos
import pandas as pd

# 프로젝트 루트
BASE_DIR = Path(__file__).resolve().parent.parent

# 경로
CSV_PATH = BASE_DIR / "Results" / "classification.csv"
RESULTS_DIR = BASE_DIR / "Results"

# 분류별 앨범
ALBUMS = {
    "Background": "01. Background",
    "Review": "02. Review",
    "Not lang ko": "03. Not lang ko",
    "Failed Audio": "04. Failed Audio",
    "Vlog": "05. Vlog",
}

# 중복 검수 앨범
DUPLICATE_ALBUM = "06. Duplicate Review"

# True: 결과만 확인
# False: 실제 앨범 추가
DRY_RUN = True

# 실제 처리할 최대 영상 개수
MAX_ITEMS = 10


def normalize_filename(filename):
    """IMG_3890 (1) -> img_3890"""

    filename = Path(str(filename).strip()).stem
    filename = re.sub(r"\s\(\d+\)$", "", filename)

    return filename.lower()


def main():

    RESULTS_DIR.mkdir(parents=True, exist_ok=True)

    # CSV 읽기
    df = pd.read_csv(CSV_PATH)

    print(f"CSV records: {len(df)}")

    # 파일명 정규화
    df["normalized_filename"] = df["filename"].apply(normalize_filename)

    # 사진 앱 동영상 조회
    photosdb = osxphotos.PhotosDB()
    photos = photosdb.photos(images=False, movies=True)

    print(f"Photos app videos: {len(photos)}")

    # 사진 앱 파일명 인덱스
    photo_map = defaultdict(list)

    for photo in photos:
        key = normalize_filename(photo.original_filename)
        photo_map[key].append(photo)

    # 정규화된 파일명 기준 그룹화
    groups = df.groupby("normalized_filename")

    matched = defaultdict(list)
    conflicts = []
    not_found = []
    duplicates = []

    duplicate_uuids = []

    for filename, group in groups:

        classifications = group["classification"].dropna().unique()

        # classification 충돌 검사
        has_conflict = len(classifications) > 1 or (
            group["classification"].isna().any() and len(group) > 1
        )

        # 사진 앱에서 영상 검색
        candidates = photo_map.get(filename, [])

        if len(candidates) == 0:

            not_found.append(
                {
                    "normalized_filename": filename,
                    "classifications": ", ".join(map(str, classifications)),
                    "csv_records": len(group),
                }
            )

            continue

        # Classification 충돌
        if has_conflict:

            for _, row in group.iterrows():
                conflicts.append(
                    {
                        "normalized_filename": filename,
                        "filename": row["filename"],
                        "classification": row["classification"],
                    }
                )

            # 발견된 모든 영상을 검수 앨범으로 이동 대상에 추가
            duplicate_uuids.extend(photo.uuid for photo in candidates)

            duplicates.append(
                {
                    "normalized_filename": filename,
                    "classifications": ", ".join(map(str, classifications)),
                    "photo_count": len(candidates),
                    "destination_album": DUPLICATE_ALBUM,
                }
            )

            continue

        # Classification이 없는 경우
        if len(classifications) == 0:
            continue

        classification = classifications[0]

        # 등록되지 않은 classification은 처리하지 않음
        if classification not in ALBUMS:
            continue

        # 정상 매칭: 동일 파일명의 모든 영상을 해당 앨범에 추가
        matched[classification].extend(photo.uuid for photo in candidates)

        # 사진 앱에 동일 파일명이 여러 개 존재하는 경우 기록
        if len(candidates) > 1:

            duplicates.append(
                {
                    "normalized_filename": filename,
                    "classifications": classification,
                    "photo_count": len(candidates),
                    "destination_album": ALBUMS[classification],
                }
            )

    # UUID 중복 제거
    for classification in matched:
        matched[classification] = list(dict.fromkeys(matched[classification]))

    duplicate_uuids = list(dict.fromkeys(duplicate_uuids))

    # 결과 CSV 저장
    pd.DataFrame(conflicts).to_csv(
        RESULTS_DIR / "classification_conflicts.csv",
        index=False,
        encoding="utf-8-sig",
    )

    pd.DataFrame(not_found).to_csv(
        RESULTS_DIR / "not_found.csv",
        index=False,
        encoding="utf-8-sig",
    )

    pd.DataFrame(duplicates).to_csv(
        RESULTS_DIR / "photo_duplicates.csv",
        index=False,
        encoding="utf-8-sig",
    )

    # 결과 출력
    print("\n========== Summary ==========")

    print(f"CSV records: {len(df)}")
    print(f"Classification conflicts: {len(conflicts)}")
    print(f"Not found: {len(not_found)}")
    print(f"Photo duplicates: {len(duplicates)}")

    print("\n========== Album Summary ==========")

    total_matched = 0

    for classification, album_name in ALBUMS.items():

        count = len(matched[classification])

        print(f"{album_name}: {count} videos")

        total_matched += count

    print(f"{DUPLICATE_ALBUM}: {len(duplicate_uuids)} videos")

    # 실제 앨범 추가
    if DRY_RUN:
        print("\n[DRY RUN] No albums modified.")
        return

    print("\n========== Adding to Albums ==========")

    total_added = 0

    # 일반 분류 앨범
    targets = {
        **{
            ALBUMS[classification]: uuids
            for classification, uuids in matched.items()
        },
        DUPLICATE_ALBUM: duplicate_uuids,
    }

    for album_name, uuids in targets.items():

        if not uuids:
            continue

        # 전체 최대 처리 개수 제한
        remaining = MAX_ITEMS - total_added

        if remaining <= 0:
            break

        target_uuids = uuids[:remaining]

        # UUID 파일명
        safe_name = re.sub(r"[^a-zA-Z0-9_-]", "_", album_name)
        uuid_path = RESULTS_DIR / f"{safe_name}_uuids.txt"

        uuid_path.write_text(
            "\n".join(target_uuids),
            encoding="utf-8",
        )

        command = [
            "osxphotos",
            "batch-edit",
            "--uuid-from-file",
            str(uuid_path),
            "--add-to-album",
            album_name,
        ]

        print(f"\n{album_name}: {len(target_uuids)} videos")

        subprocess.run(command, check=True)

        total_added += len(target_uuids)

    print(f"\nTotal added: {total_added}")
    print("Done!")


if __name__ == "__main__":
    main()
