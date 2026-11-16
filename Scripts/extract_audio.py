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
            "15",  # 영상 시작부터 15초까지만 추출
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
