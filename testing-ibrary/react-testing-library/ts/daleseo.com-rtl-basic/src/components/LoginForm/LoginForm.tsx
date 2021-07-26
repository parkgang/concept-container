import { useState } from "react";

type Props = {
  onSubmit(): void;
};

export default function LoginForm({ onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          이메일
          <input
            type="email"
            placeholder="user@test.com"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </label>
        <button disabled={!email || !password}>로그인</button>
      </form>
    </>
  );
}
