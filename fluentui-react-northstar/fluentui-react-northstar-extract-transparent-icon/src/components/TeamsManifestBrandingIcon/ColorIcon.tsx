import { Provider, teamsTheme, AppsIcon } from "@fluentui/react-northstar";
import styled from "styled-components";

const Reset = styled.div`
  width: 192px;
  height: 192px;
  background-color: green;
  /* 중앙 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    width: 130px;
    height: 130px;
    border-radius: 5px;
    background-color: white;
    /* 중앙 정렬 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > span > svg {
    width: 96px;
    height: 96px;
    color: black;
  }
`;

/**
 * 공식 Spec: 상점 및 대부분의 시나리오에서 표시됩니다. 아이콘은 중앙에 96x96픽셀 기호가 포함된 총 192x192픽셀이어야 합니다.
 * 선 이외 모두 배경이 투명이면 기본 테마이외 왼쪽 사이드바에서 잘 보이지 않습니다. 이에 따라 선이 잘 표시되도록 뒷 배경을 흰색으로 추가하였습니다.
 * png 투명화 할 때 green 부분만 날리도록 하면 됩니다.
 */
export default function ColorIcon() {
  return (
    <>
      <Provider theme={teamsTheme}>
        <Reset id="이 Element 노드 스크린샷 캡쳐">
          <AppsIcon />
        </Reset>
      </Provider>
    </>
  );
}
