from pathlib import Path

import pandas as pd

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

# 프로젝트 디렉터리
RESULTS_DIR = BASE_DIR / "Results"

# 결과 디렉터리 자동 생성
RESULTS_DIR.mkdir(parents=True, exist_ok=True)

vad = pd.read_csv(RESULTS_DIR / "speech_detection.csv")
transcription = pd.read_csv(RESULTS_DIR / "transcription.csv")

df = vad.merge(transcription, on="filename", how="left")


def classify(row):
    if not row["speech_detected"]:
        return "Background"

    if pd.isna(row["transcription"]):
        return "Review"

    if len(str(row["transcription"]).strip()) < 3:
        return "Review"

    return "Vlog"


df["classification"] = df.apply(classify, axis=1)

df.to_csv(RESULTS_DIR / "classification.csv", index=False)

print(df["classification"].value_counts())
