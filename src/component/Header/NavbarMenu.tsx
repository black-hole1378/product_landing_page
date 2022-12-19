import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import Link from "next/link";
import Data from "../../utitlity/Data.json";
export const LinkWrapper = styled(Link)`
  padding: 5px;
  text-decoration: none;
  color: hsl(219, 9%, 45%);
  &:hover {
    color: hsl(0, 0%, 0%);
    font-size: 1.1rem;
    border-bottom: 2px solid hsl(26, 100%, 55%);
  }
`;

export default function NavbarMenu() {
  const [links, setLinks] = useState<any[]>([]);
  const [address, setAddress] = useState<any[]>([]);
  useEffect(() => {
    setLinks(Data.menu_item.menus);
    setAddress(Data.menu_item.address);
  }, []);

  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      flexDirection="row"
      gap={2}
      alignItems="center"
    >
      {links.map((link, index) => (
        <LinkWrapper
          key={index}
          href={address[index] != null ? address[index] : null}
        >
          {link != null ? link : null}
        </LinkWrapper>
      ))}
    </Box>
  );
}
