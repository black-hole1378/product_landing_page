import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { LinkWrapper } from "./NavbarMenu";
import Data from "../../utitlity/Data.json";
export default function Sidebar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [links, setLinks] = useState<string[]>([]);
  const [address, setAddress] = useState<string[]>([]);
  React.useEffect(() => {
    setLinks(Data.menu_item.menus);
    setAddress(Data.menu_item.address);
  }, []);

  return (
    <Box mt={1} display={{ md: "none", xs: "block" }}>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon fontSize="small" />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
        <Box
          p={1}
          display={"flex"}
          width={"220px"}
          flexDirection="column"
          alignItems={"start"}
          gap={2}
        >
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <Box sx={{ width: "100%", maxWitdth: "220px" }}>
            <List component="nav">
              {links
                ? links.map((link, index) => (
                    <Box key={index} mb={3}>
                      <ListItemText>
                        <LinkWrapper href={address[index]}>{link}</LinkWrapper>
                      </ListItemText>
                      <Divider />
                    </Box>
                  ))
                : null}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
