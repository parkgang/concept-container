import subprocess
from pathlib import Path

from tqdm import tqdm

VIDEO_DIR = Path("Original")
AUDIO_DIR = Path("Audio")

AUDIO_DIR.mkdir(exist_ok=True)

videos = list(VIDEO_DIR.glob("*"))

for video in tqdm(videos):
    if video.suffix.lower() not in [".mov", ".mp4"]:
        continue

    output = AUDIO_DIR / f"{video.stem}.wav"

    if output.exists():
        continue

    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(video),
            "-t",
            "10",
            "-vn",
            "-ac",
            "1",
            "-ar",
            "16000",
            str(output),
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

print("오디오 추출 완료")
