import { Suspense } from "react";

import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import AsyncCall from "./components/AsyncCall";

export default function App() {
  return (
    <>
      <h1>React Testing Library</h1>
      <LoginForm
        onSubmit={() => {
          alert(`로그인 Submit`);
        }}
      />
      <NotFound path="/test" />
      <Suspense
        fallback={
          <div>
            <h1>로딩 중...</h1>
          </div>
        }
      >
        <AsyncCall />
      </Suspense>
    </>
  );
}
