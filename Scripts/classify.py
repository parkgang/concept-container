from pathlib import Path

import pandas as pd

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

# 프로젝트 디렉터리
RESULTS_DIR = BASE_DIR / "Results"

# 결과 디렉터리 자동 생성
RESULTS_DIR.mkdir(parents=True, exist_ok=True)

# CSV 불러오기
vad = pd.read_csv(RESULTS_DIR / "speech_detection.csv")
transcription = pd.read_csv(RESULTS_DIR / "transcription.csv")
failed_audio = pd.read_csv(RESULTS_DIR / "failed_audio.csv")

# VAD + Transcription 통합
df = vad.merge(transcription, on="filename", how="left")


def classify(row):
    # 음성이 탐지되지 않은 경우
    if not row["speech_detected"]:
        return "Background"

    # 음성은 있지만 텍스트가 없는 경우
    if pd.isna(row["transcription"]):
        return "Review"

    # 인식된 텍스트가 너무 짧은 경우
    if len(str(row["transcription"]).strip()) < 3:
        return "Review"

    # 인식된 텍스트가 40글자 이하인 경우
    if len(str(row["transcription"]).strip()) <= 40:
        return "Short Transfer"

    # 한국어가 아닌 경우
    if row["language"] != "ko":
        return "Not lang ko"

    return "Vlog"


# 기존 데이터 분류
df["classification"] = df.apply(classify, axis=1)

# 오디오 추출 실패 파일 별도 분류
failed_audio["classification"] = "Failed Audio"

# 데이터 통합
df = pd.concat([df, failed_audio], ignore_index=True)

# CSV 저장
df.to_csv(RESULTS_DIR / "classification.csv", index=False)

print(df["classification"].value_counts())
