import React from "react";
import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  Box,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { MenuProps, MenuControler } from "./MenuControler";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
function Profile(props: MenuProps) {
  return (
    <div>
      <Tooltip title="Your profile" arrow>
        <IconButton onClick={props.handleClick}>
          <Avatar alt="Profile" src="/images/image-avatar.png" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={props.anchorE1}
        open={props.open}
        onClose={props.handleClose}
        MenuListProps={{
          "aria-labelledby": "cart-button",
        }}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          sx={{
            minWidth: "240px",
            padding: "10px",
          }}
        >
          <MenuItem>
            <Avatar alt="Profile" src="/images/image-avatar.png" /> &nbsp;
            Profile
          </MenuItem>
          <MenuItem>
            <Avatar alt="Profile" src="/images/image-avatar.png" /> &nbsp; My
            account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another accouont
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}

export default MenuControler(Profile);
