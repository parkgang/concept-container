import { useState } from "react";
import { Provider as RTProvider, themeNames } from "@fluentui/react-teams";

import Welcome from "components/Communication/Welcome";
import Error from "components/Communication/Error";

export default function App() {
  const [rtTheme, setRtTheme] = useState<themeNames>(themeNames.Default);

  function handleRtTheme(theme: themeNames) {
    return () => setRtTheme(theme);
  }

  return (
    <>
      <header>
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
