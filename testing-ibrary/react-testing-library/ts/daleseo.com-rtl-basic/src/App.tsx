import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";

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
    </>
  );
}
