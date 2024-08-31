"""
CSV 컬럼으로 확장된 데이터를 로우로 변환하는 스크립트
"""

import pandas as pd

# 파일 불러오기
FILE_PATH = "./og.csv"
data = pd.read_csv(FILE_PATH, encoding="utf-8")

# 데이터를 '넓은 형식'에서 '긴 형식'으로 변환: 컬럼 데이터 로우로 변환
melted_data = data.melt(
    id_vars=["범위"], var_name="카드 이름", value_name="카드 총액"
)

# '카드 이름'에서 '합계'가 포함된 행 제거: 왜냐면 컬럼 데이터 중 '합계'는 각 컬럼의 합계를 수식이므로 필요 없음
filtered_data = melted_data[~melted_data["카드 이름"].str.contains("합계")]

# 결과 데이터 표시
print(filtered_data)

# 가공된 데이터를 CSV 파일로 저장
filtered_data.to_csv("./proc.csv", index=False, encoding="utf-8")
