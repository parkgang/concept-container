from pathlib import Path

import pandas as pd
from faster_whisper import WhisperModel
from tqdm import tqdm

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

# 프로젝트 디렉터리
ORIGINAL_DIR = BASE_DIR / "Original"
AUDIO_DIR = BASE_DIR / "Audio"
RESULTS_DIR = BASE_DIR / "Results"
VLOG_DIR = BASE_DIR / "Vlog"


vad_df = pd.read_csv(RESULTS_DIR / "speech_detection.csv")

model = WhisperModel(
    "small",
    #
    # device="cpu",
    # Apple Silicon 더 빠를 수 있다고 함.
    device="mps",
    compute_type="int8",
)

results = []

targets = vad_df[vad_df["speech_detected"] == True]

for _, row in tqdm(targets.iterrows(), total=len(targets)):
    audio = AUDIO_DIR / f"{row['filename']}.wav"

    segments, info = model.transcribe(str(audio), beam_size=5)

    text = " ".join(segment.text.strip() for segment in segments)

    results.append(
        {
            "filename": row["filename"],
            "language": info.language,
            "transcription": text,
            "char_count": len(text),  # 공백 포함 글자수
            "char_count_no_space": len(
                text.replace(" ", "")
            ),  # 공백 제외 글자수
        }
    )

# 후반 작업에서 해당 스키마로 Merge 되기 때문에 음성 인식 아무것도 안된 경우라도 헤더 존재해야함
# TODO: 아무것도 음성 인식 안된 경우 때문에 위에 데이터 넣는 부분과 하단에 컬럼 정보 섞이는데 한 곳에서 관리되도록
columns = [
    "filename",
    "language",
    "transcription",
    "char_count",
    "char_count_no_space",
]

pd.DataFrame(results, columns=columns).to_csv(
    RESULTS_DIR / "transcription.csv",
    index=False,
)

print("음성 인식 완료")
