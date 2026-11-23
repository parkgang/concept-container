import subprocess
from pathlib import Path

import osxphotos
import pandas as pd

print("uuid 모드\n")

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

# UUID, classification이 존재하는 데이터만 처리
df = df.dropna(subset=["uuid", "classification"])

# 문자열 공백 제거
df["uuid"] = df["uuid"].astype(str).str.strip()
df["classification"] = df["classification"].astype(str).str.strip()

# 빈 문자열 제거
df = df[(df["uuid"] != "") & (df["classification"] != "")]

# UUID, classification 기준으로 중복 제거
df = df.drop_duplicates(subset=["uuid", "classification"])


# 앨범별 처리
for classification, group in df.groupby("classification"):

    uuids = group["uuid"].tolist()

    # Photos 라이브러리에 실제 존재하는 UUID 일괄 조회
    photos = photosdb.photos(uuid=uuids)

    valid_uuids = [photo.uuid for photo in photos]

    if not valid_uuids:
        print(f"[SKIP] {classification}: 추가할 사진 없음")
        continue

    print(f"\n[ALBUM] {classification}")
    print(f"  대상: {len(valid_uuids)}개")

    # UUID 목록을 stdin으로 전달
    command = [
        "osxphotos",
        "query",
        "--uuid-from-file",
        "-",
        "--add-to-album",
        classification,
        "--quiet",
    ]

    result = subprocess.run(
        command,
        input="\n".join(valid_uuids),
        capture_output=True,
        text=True,
    )

    if result.returncode == 0:
        print(f"  [OK] {len(valid_uuids)}개 추가 완료")
    else:
        print(f"  [ERROR] {classification}")
        print(result.stderr)


print("\n작업 완료")
