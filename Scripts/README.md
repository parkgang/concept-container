## 의존성

```
cd TravelVideoPOC/Scripts

python3 -m venv .venv
source .venv/bin/activate

# FFmpeg 설치
brew install ffmpeg

# Python 패키지 설치
pip install faster-whisper torch torchaudio pandas tqdm torchcodec
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

## 여담

- Whisper 모델 정보 확인: `python -m pip show faster-whisper av`
