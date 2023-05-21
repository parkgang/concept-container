import { Provider as RTProvider, themeNames } from "@fluentui/react-teams";
import { useState } from "react";

import Error from "components/Communication/Error";
import Welcome from "components/Communication/Welcome";

export default function App() {
  const [rtTheme, setRtTheme] = useState<themeNames>(themeNames.Default);

  function handleRtTheme(theme: themeNames) {
    return () => {
      console.log("이벤트 핸들러 동작");
      setRtTheme(theme);
    };
  }

  return (
    <>
      <header
        style={{
          // position: static 속성으로 인해 z-index이(가) 적용되지 않는 문제를 해결하기 위함
          position: "relative",
          // 하위 `<svg />` 가 `position: absolute` 속성을 가지고 있어서 이기기 위함
          zIndex: 1,
        }}
      >
        <button onClick={handleRtTheme(themeNames.Default)}>Default</button>
        <button onClick={handleRtTheme(themeNames.Dark)}>Dark</button>
        <button onClick={handleRtTheme(themeNames.HighContrast)}>
          HighContrast
        </button>
      </header>
      <RTProvider themeName={rtTheme} lang="en-US">
        <Welcome />
        <hr />
        <Error />
        <hr />
      </RTProvider>
    </>
  );
}
