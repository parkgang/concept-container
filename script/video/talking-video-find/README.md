## 개요

- 아이폰으로 촬영된 영상 중 나레이션으로 사람 목소리 영상만 분리하는 자동화 스크립트입니다.
- 영상에서 오디오를 추출하고, Silero VAD로 음성 구간을 감지한 후, Whisper로 텍스트 변환하여 분류합니다. 이후 osxphotos를 이용해 사진 앱에 앨범을 추가합니다.
- 꼭 아이폰 영상이 아니더라도, 영상에 나레이션이 포함되어 있다면 활용 가능합니다.

## 시작

`Audio` , `Original` , `Results` 디렉터리 만들기

`osxphotos` 설치

`osxphotos` 으로 사진 내보내기

```bash
# 내보내기 스크립트
osxphotos export "/Users/kyungeun/Downloads/Vlog 1" \
    --album "Vlog 정리1" \
    --skip-edited \
    --download-missing \
    --filename "{uuid}_{original_name}"
```

```bash
# 오류 발생 목록 추출 (해당 CSV에서 `missing` 값 1인것 필터링)
osxphotos exportdb "/Users/kyungeun/Downloads/Vlog 1" \
  --report "/Users/kyungeun/Downloads/Vlog 1/export_report.csv" 0
```

`Original` 디렉터리에 처리할 영상 파일 모두 넣기

### 의존성 설치

```
cd Scripts

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

### Run

의존성 설치 후 아래의 순서대로 스크립트 실행. `.venv` 가 있는 `Scripts` 에서 실행하면 됨.

- 영상 초반 10초 오디오 추출: `python extract_audio.py` (Audio 디렉터리에 만들어짐)
- Silero VAD로 음성 감지: `detect_speech.py` (speech_detection.csv 생성됨)
- Whisper로 음성 텍스트 변환: `transcribe.py` (transcription.csv 생성됨)
- 최종 분류 결과 만들기: `classify.py` (각각 만들어진 CSV 파일을 바탕으로 classification.csv 생성됨)
- osxphotos 동작하는지 확인: `osxphotos_smoke_test.py` (사진.App 권한 문제로 안될 수 있음으로 미리 확인)
- 분류 결과 바탕으로 사진 앱에 앨범 추가: `organize_photos.py` (사진.app 권한 설정된 앱에서 실행 필요. VSCode 안되고 Alacritty 되었음. 사진.app 이 열려있어야함!!!)
  - osxphotos로 내보내기 하여 uuid 가 있다면 add_to_album_by_uuid.py 으로 실행됨. 고유하게 앨범에 들어가니 앨범에서 확인하면 끝.
  - 아닌 경우는 add_to_album_by_filename.py 으로 실행 됨. 사진.app에 중복 파일명이 있을 수 있어 검사하는 로직이 들어감
    - DRY_RUN = True 으로 CSV 결과 미리 확인
    - MAX_ITEMS 으로 처리 개수 조절하며 확인. 무한대로 하려면 9999~로 설정
    - 중복된 이름도 모두 앨범에 추가됨. 콘솔 화면에 중복 사진 개수 포함되어 표시.
    - 파일명 중복으로 잘못된 사진이 들어갈 수 있음으로 사진앱 앨범에서 셰계여행 기간 포함 안되는 사진 제거 (중복 파일명 모두 추가되어서 자동화 돌린 영상까지만 제거 필요)
- 분류된 classification에 맞게 사람 분류 시작. 이미 로컬에 있는 파일로 빠르게 보고 싶으면 `python move_by_classification.py --dry-run` 검토 후 `--dry-run` 제거하여 실행 후 로컬에서 보면됨 (분류된 Class 디렉터리에 맞게 로컬 파일 이동됨)

## Note

- Whisper 모델 정보 확인: `python -m pip show faster-whisper av`
