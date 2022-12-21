import style from "../styles/home.module.css";
import { Paper, Grid } from "@mui/material";
import ImageContainer from "../src/component/indexPage/ImageContainer";
import { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Grid spacing={3} container>
          <Grid item md={6} xl={6}>
            <ImageContainer />
          </Grid>
          <Grid item md={6} xl={6}>
            Hello
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
