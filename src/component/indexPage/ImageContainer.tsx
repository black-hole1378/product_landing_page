import { NextPage } from "next";
import { useState } from "react";
import { Box, Stack, styled, Button, ButtonBase } from "@mui/material";
import Data from "../../utitlity/Data.json";
import { wrapper } from "../../utitlity/store/imagestore/imageStore";
import { selectImageState } from "../../utitlity/store/imagestore/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImageSlider } from "./ImageSlider";
import ImageDialog from "./ImageDialog";

export const ImageWrapper = styled("img")`
  width: 100%;
  height: 380px;
  border-radius: 5px;
`;

const images = Data.product.images.selected;
const thumbImage = Data.product.images.thumbnail;

const ImageContainer: NextPage = () => {
  const index = useSelector(selectImageState);
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleDialog = () => {
    setOpen(!open);
    console.log("Hello");
  };

  return (
    <Box mt={-3}>
      <Stack spacing={5}>
        <ButtonBase onClick={handleDialog}>
          <ImageWrapper src={images[index]} alt="Not supported" />
        </ButtonBase>
        <ImageSlider />
        <ImageDialog
          index={index}
          thumbleImage={thumbImage}
          open={open}
          selectedImages={images}
          handleDialog={handleDialog}
        />
      </Stack>
    </Box>
  );
};

export default wrapper.withRedux(ImageContainer);
