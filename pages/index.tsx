import { CssBaseline } from "@mui/material";
import HeadElement from "../src/component/Header/Head";
import style from "../styles/home.module.css";
export default function Home() {
  return (
    <div className={style.container}>
      <CssBaseline />
      <main>Hello Main</main>
    </div>
  );
}
