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
        }
    )

pd.DataFrame(results).to_csv(RESULTS_DIR / "transcription.csv", index=False)

print("음성 인식 완료")
