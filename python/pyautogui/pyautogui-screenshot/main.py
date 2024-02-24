"""스크린샷 캡처 예제"""

import pyautogui

# 스크린샷 찍을 영역: 시작점 (100, 200), 너비 500, 높이 300
screenshot = pyautogui.screenshot(region=(100, 200, 500, 300))

# 스크린샷 파일로 저장
screenshot.save("screenshot.png")
