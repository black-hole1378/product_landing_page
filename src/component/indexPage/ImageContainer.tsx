import { NextPage } from "next";
import { useState } from "react";
import { Box, Stack, styled, Button, ButtonBase } from "@mui/material";
import Data from "../../utitlity/Data.json";
import { wrapper } from "../../utitlity/store/imagestore/imageStore";
import {
  changeIndex,
  selectImageState,
} from "../../utitlity/store/imagestore/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImageSlider } from "./ImageSlider";
import ImageDialog from "./ImageDialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import style from "../../../styles/swiper.module.css";
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

  const handleClick = () => {
    console.log(index);
    dispatch(changeIndex(index + 1));
  };

  return (
    <Box>
      <Stack spacing={4}>
        <ButtonBase
          sx={{ display: { xs: "none", md: "block" } }}
          onClick={handleDialog}
        >
          <ImageWrapper src={images[index]} alt="Not supported" />
        </ButtonBase>
        <Swiper
          className={style.swiperContainer}
          modules={[Navigation]}
          navigation
          onSlideChange={() => dispatch(changeIndex(index + 1))}
          slidesPerView={1}
        >
          {images
            ? images.map((image, index) => (
                <SwiperSlide key={index}>
                  <ImageWrapper src={image} alt="" />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
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
