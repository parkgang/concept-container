## 의존성

```
cd TravelVideoPOC/Scripts

python3 -m venv .venv
source .venv/bin/activate

# FFmpeg 설치
brew install ffmpeg

# Python 패키지 설치
pip install faster-whisper torch torchaudio pandas tqdm torchcodec osxphotos
# faster-whisper와 av(PyAV) 패키지 간의 호환성 문제
python -m pip install "av<19"

# 파일 실행
python {}
```

## Run

- 영상 초반 10초 오디오 추출: extract_audio.py
- Silero VAD로 음성 감지: detect_speech.py
- Whisper로 음성 텍스트 변환: transcribe.py
- 최종 분류 결과 만들기: classify.py
- osxphotos 동작하는지 확인: osxphotos_smoke_test.py
- 분류 결과 바탕으로 사진 앱에 앨범 추가: organize_photos.py (사진.app 권한 설정된 앱에서 실행 필요. VSCode 안되고 Alacritty 되었음)
  - DRY_RUN = True 으로 CSV 결과 미리 확인
  - MAX_ITEMS 으로 처리 개수 조절하며 확인. 무한대로 하려면 9999~로 설정
  - 중복된 이름도 모두 앨범에 추가됨. 콘솔 화면에 중복 사진 개수 포함되어 표시.
- 사진앱 앨범에세 셰계여행 기간 포함 안되는 사진 제거 (중복 파일명 모두 추가되어서 자동화 돌린 영상까지만 제거 필요)
- 사람이 보면서 검토
  - `python move_by_classification.py --dry-run` 검토 후 `--dry-run` 제거하여 실행 후 로컬에서 보면 빠름

## 여담

- Whisper 모델 정보 확인: `python -m pip show faster-whisper av`
