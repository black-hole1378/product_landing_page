import { NextPage } from "next";
import { useState } from "react";
import { Box, Stack, styled, Button } from "@mui/material";
import Data from "../../utitlity/Data.json";
import { wrapper } from "../../utitlity/store/imagestore/imageStore";
import {
  selectImageState,
  changeIndex,
} from "../../utitlity/store/imagestore/imageSlice";
import { useDispatch, useSelector } from "react-redux";

const ImageWrapper = styled("img")`
  width: 100%;
  height: 380px;
  border-radius: 5px;
`;

const images = Data.product.images.selected;

const ImageContainer: NextPage = () => {
  const index = useSelector(selectImageState);
  const dispatch = useDispatch();
  const handleChange = (num: number) => {
    dispatch(changeIndex(num));
  };

  return (
    <Box mt={-2}>
      <Stack spacing={2}>
        <ImageWrapper src={images[index]} alt="Not supported" />
        <Button onClick={() => handleChange(2)}>Hello {index}</Button>
      </Stack>
    </Box>
  );
};

export default wrapper.withRedux(ImageContainer);
