import { NextPage } from "next";
import { useState } from "react";
import { Box, Stack, styled, Button, ButtonBase } from "@mui/material";
import Data from "../../utitlity/Data.json";
import { wrapper } from "../../utitlity/store/imagestore/imageStore";
import { selectImageState } from "../../utitlity/store/imagestore/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImageSlider } from "./ImageSlider";

const ImageWrapper = styled("img")`
  width: 100%;
  height: 380px;
  border-radius: 5px;
`;

const images = Data.product.images.selected;

const ImageContainer: NextPage = () => {
  const index = useSelector(selectImageState);
  const dispatch = useDispatch();

  return (
    <Box mt={-3}>
      <Stack spacing={5}>
        <ButtonBase>
          <ImageWrapper src={images[index]} alt="Not supported" />
        </ButtonBase>
        <ImageSlider />
      </Stack>
    </Box>
  );
};

export default wrapper.withRedux(ImageContainer);
