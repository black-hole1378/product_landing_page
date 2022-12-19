import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../src/utitlity/theme";
import Header from "../src/component/Header/Header";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
