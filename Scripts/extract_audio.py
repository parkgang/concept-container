import csv
import subprocess
from pathlib import Path

from tqdm import tqdm

# 프로젝트 루트 디렉터리
BASE_DIR = Path(__file__).resolve().parent.parent

VIDEO_DIR = BASE_DIR / "Original"
AUDIO_DIR = BASE_DIR / "Audio"
FAILED_CSV = BASE_DIR / "Results/failed_audio.csv"

AUDIO_DIR.mkdir(exist_ok=True)

videos = [
    v for v in VIDEO_DIR.glob("*") if v.suffix.lower() in [".mov", ".mp4"]
]

failed = []  # (파일명, 경로, 실패 사유)

for video in tqdm(videos):
    output = AUDIO_DIR / f"{video.stem}.wav"

    if output.exists():
        continue

    try:
        result = subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                str(video),
                "-t",
                "10",  # 영상 시작부터 10초까지만 추출
                "-vn",
                "-ac",
                "1",
                "-ar",
                "16000",
                str(output),
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.PIPE,
            text=True,
            errors="replace",
            timeout=120,
        )
    except subprocess.TimeoutExpired:
        failed.append((video.name, str(video), "timeout"))
        output.unlink(missing_ok=True)
        continue
    except FileNotFoundError:
        raise SystemExit(
            "ffmpeg를 찾을 수 없습니다. ffmpeg가 설치되어 있는지 확인하세요."
        )

    # 종료 코드가 0이 아니거나, 출력 파일이 없거나 비어 있으면 실패로 처리
    if (
        result.returncode != 0
        or not output.exists()
        or output.stat().st_size == 0
    ):
        stderr_lines = (result.stderr or "").strip().splitlines()
        reason = (
            stderr_lines[-1]
            if stderr_lines
            else f"returncode={result.returncode}"
        )
        failed.append((video.name, str(video), reason))
        # 불완전하게 생성된 파일이 남아 다음 실행 때 건너뛰지 않도록 삭제
        output.unlink(missing_ok=True)

# 실패 목록 CSV 저장 (엑셀에서 한글이 깨지지 않도록 utf-8-sig)
if failed:
    with open(FAILED_CSV, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow(["filename", "path", "reason"])
        writer.writerows(failed)
    print(f"오디오 추출 완료 (실패 {len(failed)}개 → {FAILED_CSV})")
else:
    print("오디오 추출 완료 (실패 없음)")
