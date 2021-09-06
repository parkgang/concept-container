import type { AppProps } from "next/app";

import "../styles/reset.css";
import "../styles/main.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
