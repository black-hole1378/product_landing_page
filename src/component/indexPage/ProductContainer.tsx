import React from "react";
import { Grid, IconButton, styled, Typography, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Data from "../../utitlity/Data.json";
import { useSelector, useDispatch } from "react-redux";
import {
  Product,
  addProduct,
} from "../../utitlity/store/productstore/ProductSlice";
const ContainerWrapper = styled(Grid)`
  border-radius: 5px;
  background-color: hsl(223, 64%, 98%);
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = () => {
  const [quantity, setQunatity] = useState<number>(0);

  const dispatch = useDispatch();
  const addtoCard = () => {
    if (quantity >= 1) {
      const new_product: Product = {
        name: "SNEAKER COMPANY",
        edition: "Fall Limited Edition",
        image: Data.product.images.selected,
        quantity: quantity,
        mainPrice: 125.0,
        discount: "50%",
      };
      dispatch(addProduct(new_product));
    }
  };

  return (
    <Grid container sx={{ alignItems: "center" }} columnSpacing={2}>
      <ContainerWrapper item md={4} sm={12} container>
        <Grid item>
          <IconButton
            onClick={() => setQunatity(quantity >= 1 ? quantity - 1 : quantity)}
            color="warning"
          >
            <RemoveIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color={"text.primary"}>
            {quantity}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setQunatity(quantity + 1)} color="warning">
            <AddIcon />
          </IconButton>
        </Grid>
      </ContainerWrapper>
      <Grid item mt={{ xs: "14px", md: "0px" }} md={6} xs={12}>
        <Button
          variant="contained"
          sx={{ fontSize: "12px", fontWeight: "bolder", width: "100%" }}
          color="warning"
          onClick={() => addtoCard()}
        >
          <ShoppingCartIcon fontSize="small" /> &nbsp; Add to Card
        </Button>
      </Grid>
    </Grid>
  );
};
