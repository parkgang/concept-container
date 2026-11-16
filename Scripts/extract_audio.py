import subprocess
from pathlib import Path

from tqdm import tqdm

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

VIDEO_DIR = BASE_DIR / "Original"
AUDIO_DIR = BASE_DIR / "Audio"

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

# | 컬럼 | 설명 |
# |---|---|
# | `filename` | 파일 이름 (확장자 제외) |
# | `speech_detected` | 음성 탐지 여부 |
# | `speech_duration` | 전체 음성 구간의 합산 길이 (초) |
print("오디오 추출 완료")
