import React from "react";
import Routes from "./Components/Routes";

function App() {
  return (
    <div>
      <span>Movie Theaters</span>
      {/* <Header /> (Router 안에서 있어야 합니다) */}
      <Routes />
    </div>
  );
}

export default App;
