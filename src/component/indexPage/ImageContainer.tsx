import React, { useState } from "react";
import { Box, Stack, ButtonBase } from "@mui/material";
import ImageDialog from "./ImageDialog";
import { ImageSlider } from "./ImageSlider";
import { ImageContainerWrapper, ImageProps } from "./ImageContainerWrapper";
import { ImageWrap } from "./image";

const ImageContainer = (props: ImageProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { index, selectedImage } = props;
  const handleDialog = () => {
    setOpen(!open);
    console.log("Hello");
  };

  return (
    <Box>
      <Stack spacing={4}>
        <ButtonBase
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={handleDialog}
        >
          <ImageWrap url={selectedImage[index]} />
        </ButtonBase>
        <ImageSlider {...props} />
        <ImageDialog open={open} handleDialog={handleDialog} {...props} />
      </Stack>
    </Box>
  );
};

export default ImageContainerWrapper(ImageContainer);
