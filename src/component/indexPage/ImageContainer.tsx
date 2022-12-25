import React, { useState } from "react";
import { Box, Stack, ButtonBase } from "@mui/material";
import ImageDialog from "./ImageDialog";
import SwiperSlider from "./swiper";
import { ImageContainerWrapper, ImageProps } from "./ImageContainerWrapper";
import { ImageWrap } from "./image";
import { ImageSlider } from "./ImageSlider";

const ImageContainer = (props: ImageProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { index, selectedImage } = props;
  const handleDialog = () => {
    setOpen(!open);
    console.log("Hello");
  };

  return (
    <Box>
      <Stack spacing={2}>
        <ButtonBase
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={handleDialog}
        >
          <ImageWrap url={selectedImage[index]} />
        </ButtonBase>
        <SwiperSlider />
        <ImageSlider {...props} />
        <ImageDialog open={open} handleDialog={handleDialog} {...props} />
      </Stack>
    </Box>
  );
};

export default ImageContainerWrapper(ImageContainer);
