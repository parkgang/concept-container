from pathlib import Path

import pandas as pd
from faster_whisper import WhisperModel
from tqdm import tqdm

AUDIO_DIR = Path("Audio")

vad_df = pd.read_csv("Results/speech_detection.csv")

model = WhisperModel("small", device="cpu", compute_type="int8")

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

pd.DataFrame(results).to_csv("Results/transcription.csv", index=False)

print("음성 인식 완료")
