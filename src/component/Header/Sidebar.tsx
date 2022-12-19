import {
  Box,
  IconButton,
  Drawer,
  Icon,
  Typography,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Data from "../../utitlity/Data.json";
import { LinkWrapper } from "./NavbarMenu";
export default function Sidebar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [links, setLinks] = useState<string[]>([]);
  return (
    <Box display={{ md: "nond", xs: "block" }}>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon fontSize="small" />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
        <Box
          p={1}
          display={"flex"}
          width={"200px"}
          flexDirection="column"
          alignItems={"start"}
          gap={1}
        >
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
}
