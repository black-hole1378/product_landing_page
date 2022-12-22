import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../src/component/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <CssBaseline />
      <Component {...pageProps} />
    </div>
  );
}
