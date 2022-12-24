import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../src/component/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import { wrapper } from "../src/utitlity/store/productstore/ProductStore";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <CssBaseline />
      <Component {...pageProps} />
    </div>
  );
};

export default wrapper.withRedux(App);
