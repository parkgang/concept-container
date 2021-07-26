import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <>
      <LoginForm
        onSubmit={() => {
          alert(`로그인 Submit`);
        }}
      />
      <NotFound path="/test" />
    </>
  );
}
