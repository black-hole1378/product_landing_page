import { CssBaseline } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/component/Header/Header";
import style from "../styles/home.module.css";
export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Encommerce Product page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <CssBaseline />
      <main>
        <Header />
      </main>
    </div>
  );
}
