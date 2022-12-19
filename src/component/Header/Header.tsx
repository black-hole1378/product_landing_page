import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import NavbarMenu from "./NavbarMenu";
import ShoppingCart from "./ShopingCartIcon";
import Profile from "./Profile";
export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "inherit", boxShadow: 1 }}>
      <Container maxWidth={"xl"}>
        <Toolbar disableGutters>
          <Box flexGrow={1} display="flex" alignItems="center" gap={5}>
            <Typography variant="h4" fontWeight={600} color={"text.primary"}>
              sneakers
            </Typography>
            <NavbarMenu />
          </Box>
          <Box flexGrow={0} display={"flex"} alignItems="center" gap={2}>
            <ShoppingCart />
            <Profile />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
