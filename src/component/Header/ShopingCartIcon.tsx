import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  IconButton,
  Badge,
  Menu,
  Tooltip,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { MenuProps, MenuControler } from "./MenuControler";
function ShoppingCart(props: MenuProps) {
  const isEmpty = true;

  return (
    <div>
      <Tooltip title="Your cart" arrow>
        <IconButton
          id="cart-button"
          aria-expanded={props.open ? true : undefined}
          sx={{ mt: 1 }}
          onClick={props.handleClick}
        >
          <Badge badgeContent={4} color="warning">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
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
          gap={2}
          sx={{
            minWidth: "300px",
            minHeight: "200px",
            padding: "10px",
          }}
        >
          <Typography variant="body2" fontWeight="600">
            Cart
          </Typography>
          <Divider />
          {isEmpty ? (
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={600}
              textAlign={"center"}
            >
              Your cart is Empty
            </Typography>
          ) : null}
        </Box>
      </Menu>
    </div>
  );
}

export default MenuControler(ShoppingCart);
