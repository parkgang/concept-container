import { Provider, teamsTheme, AppsIcon } from "@fluentui/react-northstar";
import styled from "styled-components";

const Reset = styled.div`
  width: 192px;
  height: 192px;
  /* 중앙 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
  & > span > svg {
    width: 96px;
    height: 96px;
  }
`;

/**
 * 상점 및 대부분의 시나리오에서 표시됩니다. 아이콘은 중앙에 96x96픽셀 기호가 포함된 총 192x192픽셀이어야 합니다.
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
