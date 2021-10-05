import {
  Provider,
  teamsTheme,
  teamsDarkTheme,
  AppsIcon,
} from "@fluentui/react-northstar";
import styled from "styled-components";

const Reset = styled.div`
  width: 32px;
  height: 32px;
  color: white;
  & > span > svg {
    width: 32px;
    height: 32px;
  }
`;

/**
 * 공식 Spec: 앱이 사용 중일 때 주로 Teams의 왼쪽에 표시됩니다. 아이콘은 32x32픽셀이어야 하며 흰색 또는 투명해야 합니다.
 * 여기서 글씨가 검은색이면 기본 테마외 잘 보이지 않습니다. 흰색으로 하도록 합니다.
 * 테마에 따라 테스트를 위해서 backgroundColor를 teamsDarkTheme로 바꿔놓은 상태입니다.
 * png 투명화 할 때 검은색 부분만 날리도록 하면 됩니다.
 */
export default function OutlineIcon() {
  return (
    <>
      <Provider theme={teamsTheme}>
        <div
          style={{
            width: "5rem",
            height: "5rem",
            backgroundColor: teamsDarkTheme.siteVariables.bodyBackground,
          }}
        >
          <Reset id="이 Element 노드 스크린샷 캡쳐">
            <AppsIcon />
          </Reset>
        </div>
      </Provider>
    </>
  );
}
