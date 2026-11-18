import subprocess
import sys
from pathlib import Path

import pandas as pd

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

# 경로 설정
CSV_PATH = BASE_DIR / "Results/classification.csv"
SCRIPTS_DIR = BASE_DIR / "Scripts"

# CSV 불러오기
df = pd.read_csv(CSV_PATH)

# uuid 컬럼에 값이 하나라도 존재하는지 확인
if "uuid" in df.columns and df["uuid"].notna().any():
    script_path = SCRIPTS_DIR / "add_to_album_by_uuid.py"
else:
    script_path = SCRIPTS_DIR / "add_to_album_by_filename.py"

# 스크립트 실행
subprocess.run(
    [sys.executable, str(script_path)],
    check=True,
)
