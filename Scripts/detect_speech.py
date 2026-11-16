from pathlib import Path

import pandas as pd
import torch
from tqdm import tqdm

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

# 프로젝트 디렉터리
ORIGINAL_DIR = BASE_DIR / "Original"
AUDIO_DIR = BASE_DIR / "Audio"
RESULTS_DIR = BASE_DIR / "Results"
VLOG_DIR = BASE_DIR / "Vlog"

# 결과 디렉터리 자동 생성
RESULTS_DIR.mkdir(parents=True, exist_ok=True)

model, utils = torch.hub.load(
    repo_or_dir="snakers4/silero-vad",
    model="silero_vad",
    force_reload=False,
    trust_repo=True,
)

get_speech_timestamps, _, read_audio, *_ = utils

results = []

for audio in tqdm(list(AUDIO_DIR.glob("*.wav"))):
    waveform = read_audio(str(audio), sampling_rate=16000)

    timestamps = get_speech_timestamps(waveform, model, sampling_rate=16000)

    speech_duration = sum(
        (item["end"] - item["start"]) / 16000 for item in timestamps
    )

    results.append(
        {
            # 파일 이름 (확장자 제외)
            "filename": audio.stem,
            # 음성 탐지 여부
            "speech_detected": len(timestamps) > 0,
            # 전체 음성 구간의 합산 길이 (초)
            "speech_duration": round(speech_duration, 2),
        }
    )

df = pd.DataFrame(results)
df.to_csv(RESULTS_DIR / "speech_detection.csv", index=False)

print("음성 감지 완료")
