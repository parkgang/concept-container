import React from "react";
import ContentLoader, { Instagram, Code } from "react-content-loader";

const App = () => {
  const tempStyle = {
    height: "100px",
  };

  return (
    // <ContentLoader viewBox="0 0 1331 225">
    //   <rect x="590.5" y="10" rx="40" ry="40" width="150" height="150" />
    //   <rect x="610.5" y="170" width="110" height="25" />
    // </ContentLoader>

    // <ContentLoader viewBox="0 0 1331 200">
    //   <rect x="590.5" y="10" rx="40" ry="40" width="150" height="150" />
    //   <rect x="610.5" y="170" width="110" height="25" />
    // </ContentLoader>

    // <ContentLoader viewBox="0 0 380 70">
    //   {/* Only SVG shapes */}
    //   <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    //   <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    //   <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    // </ContentLoader>

    <div style={tempStyle}>
      <ContentLoader viewBox="0 0 1331 100">
        <rect x="20" y="0" rx="10" ry="10" width="50" height="50" />
        <rect x="90" y="0" rx="10" ry="10" width="50" height="50" />
        <rect x="140" y="10" rx="10" ry="10" width="200" height="30" />
      </ContentLoader>
    </div>
  );
};

export default App;
