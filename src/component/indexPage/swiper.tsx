import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ImageContainerWrapper, ImageProps } from "./ImageContainerWrapper";
import style from "../../../styles/swiper.module.css";
import { ImageWrap } from "./image";
const SwiperSlider = (props: ImageProps) => {
  const { handleChange, index, selectedImage } = props;
  return (
    <Box>
      <Swiper
        className={style.swiperContainer}
        modules={[Navigation]}
        navigation
        onSlideChange={() => handleChange(index < 4 ? index + 1 : index)}
        slidesPerView={1}
      >
        {selectedImage
          ? selectedImage.map((image, index) => (
              <SwiperSlide key={index}>
                <ImageWrap url={image} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </Box>
  );
};

export default ImageContainerWrapper(SwiperSlider);
