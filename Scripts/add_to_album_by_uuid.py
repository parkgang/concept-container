import subprocess
from pathlib import Path

import osxphotos
import pandas as pd

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

# 프로젝트 디렉터리
RESULTS_DIR = BASE_DIR / "Results"

# CSV 파일
CSV_PATH = RESULTS_DIR / "classification.csv"

# Photos 라이브러리
photosdb = osxphotos.PhotosDB()

# CSV 불러오기
df = pd.read_csv(CSV_PATH)

# UUID가 존재하는 데이터만 처리
df = df.dropna(subset=["uuid", "classification"])

# UUID, classification 기준으로 중복 제거
df = df.drop_duplicates(subset=["uuid", "classification"])

# 앨범별 처리
for classification, group in df.groupby("classification"):

    uuids = group["uuid"].astype(str).tolist()

    # Photos 라이브러리에 실제 존재하는 UUID만 필터링
    valid_uuids = [
        uuid for uuid in uuids if photosdb.get_photo(uuid) is not None
    ]

    if not valid_uuids:
        print(f"[SKIP] {classification}: 추가할 사진 없음")
        continue

    print(f"\n[ALBUM] {classification}")
    print(f"  대상: {len(valid_uuids)}개")

    # UUID별 사진을 앨범에 추가
    for uuid in valid_uuids:

        command = [
            "osxphotos",
            "query",
            "--uuid",
            uuid,
            "--add-to-album",
            classification,
        ]

        result = subprocess.run(
            command,
            capture_output=True,
            text=True,
        )

        if result.returncode == 0:
            print(f"  [OK] {uuid}")
        else:
            print(f"  [ERROR] {uuid}")
            print(result.stderr)

print("\n작업 완료")
