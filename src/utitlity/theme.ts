import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    keys: ["xl", "sm", "lg", "md"],
    values: {
      xs: 400,
      sm: 800,
      md: 1200,
      lg: 1800,
      xl: 2000,
    },
  },
});

export default theme;
