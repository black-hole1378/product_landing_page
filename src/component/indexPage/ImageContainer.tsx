import React, { useState } from "react";
import { Box, Stack, styled, ButtonBase } from "@mui/material";
import ImageDialog from "./ImageDialog";
import { ImageSlider, SelectedImageWrapper } from "./ImageSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import style from "../../../styles/swiper.module.css";
import { ImageContainerWrapper, ImageProps } from "./ImageContainerWrapper";
export const ImageWrapper = styled("img")`
  width: 100%;
  height: 380px;
  border-radius: 5px;
`;

const ImageContainer = (props: ImageProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { index, handleChange, selectedImage, thumbnails } = props;
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
          <ImageWrapper src={selectedImage[index]} alt="Not supported" />
        </ButtonBase>
        <Swiper
          className={style.swiperContainer}
          modules={[Navigation]}
          navigation
          onSlideChange={() => handleChange(index + 1)}
          slidesPerView={1}
        >
          {selectedImage
            ? selectedImage.map((image, index) => (
                <SwiperSlide key={index}>
                  <ImageWrapper src={image} alt="" />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
        <ImageSlider {...props} />
        <ImageDialog open={open} handleDialog={handleDialog} {...props} />
      </Stack>
    </Box>
  );
};

export default ImageContainerWrapper(ImageContainer);
