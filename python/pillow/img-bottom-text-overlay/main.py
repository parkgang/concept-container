"""이미지 레이어의 하단 중앙에 글자를 추가하는 코드"""

from PIL import Image, ImageDraw, ImageFont

# req
IMAGE_PATH = "./thumbnail.jpeg"
TEXT = "이건 VSCode 이미지\n개행도 된다."
FONT_PATH = "/Library/Fonts/Arial Unicode.ttf"  # macOS 기준 경로
FONT_SIZE = 45
BOTTOM_MARGIN = 35
# opt
OUTPUT_PATH = "./thumbnail-modified.png"

image = Image.open(IMAGE_PATH)
width, height = image.size

draw = ImageDraw.Draw(image)

try:
    font = ImageFont.truetype(FONT_PATH, FONT_SIZE)
except IOError:
    font = ImageFont.load_default()

# 중앙 하단에 오기 위하여 텍스트 크기 계산
bbox = draw.textbbox((0, 0), TEXT, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]

TEXT_X = (width - text_width) / 2
TEXT_Y = height - text_height - BOTTOM_MARGIN

# 이미지에 텍스트 추가
draw.text((TEXT_X, TEXT_Y), TEXT, font=font, fill="black")

image.show()

# 이미지를 저장할지 물어보기
option = input(
    "이미지를 저장하려면 's' 를 입력하고 종료하려면 다른 키를 입력하세요."
)
if option.lower() == "s":
    image.save(OUTPUT_PATH)
