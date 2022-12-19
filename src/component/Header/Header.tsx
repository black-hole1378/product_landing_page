import React from "react";
import { AppBar, Box, Container, styled, Toolbar } from "@mui/material";
import NavbarMenu from "./NavbarMenu";
import ShoppingCart from "./ShopingCartIcon";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Head from "./Head";
import Link from "next/link";

const LogoWrapper = styled(Link)`
  font-size: 2.5rem;
  text-decoration: none;
  outline: none;
  color: black;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export default function Header() {
  return (
    <>
      <Head />
      <AppBar
        position="static"
        sx={{ backgroundColor: "inherit", boxShadow: 1 }}
      >
        <Container maxWidth={"xl"}>
          <Toolbar disableGutters>
            <Sidebar />
            <Box flexGrow={1} display="flex" alignItems="center" gap={5}>
              <LogoWrapper href="/">sneakers</LogoWrapper>
              <NavbarMenu />
            </Box>
            <Box flexGrow={0} display={"flex"} alignItems="center" gap={2}>
              <ShoppingCart />
              <Profile />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
