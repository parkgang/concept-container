from pathlib import Path

import pandas as pd
import torch
from tqdm import tqdm

AUDIO_DIR = Path("Audio")

model, utils = torch.hub.load(
    repo_or_dir="snakers4/silero-vad", model="silero_vad", force_reload=False
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
            "filename": audio.stem,
            "speech_detected": len(timestamps) > 0,
            "speech_duration": round(speech_duration, 2),
        }
    )

df = pd.DataFrame(results)
df.to_csv("Results/speech_detection.csv", index=False)

print("음성 감지 완료")
