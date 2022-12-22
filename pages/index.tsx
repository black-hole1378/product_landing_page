import style from "../styles/home.module.css";
import { Paper, Grid } from "@mui/material";
import ImageContainer from "../src/component/indexPage/ImageContainer";
import { NextPage } from "next";
import ContentContainer from "../src/component/indexPage/ContentContainer";
const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Grid container>
          <Grid item md={6} xl={12}>
            <ImageContainer />
          </Grid>
          <Grid item md={6} xl={12}>
            <ContentContainer />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
