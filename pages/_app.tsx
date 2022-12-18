import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../src/utitlity/theme";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
