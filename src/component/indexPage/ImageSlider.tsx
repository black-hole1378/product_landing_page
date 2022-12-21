import { NextPage } from "next";
import { Box, styled, Grid, ButtonBase } from "@mui/material";
import Data from "../../utitlity/Data.json";
import { useSelector, useDispatch } from "react-redux";
import {
  selectImageState,
  changeIndex,
} from "../../utitlity/store/imagestore/imageSlice";

export const ImageWrapperSlide = styled("img")`
  width: 100%;
  height: 100px;
  border-radius: 5px;
`;

const images = Data.product.images.thumbnail;

export const SelectedImageWrapper = styled(ImageWrapperSlide)`
  opacity: 0.5;
`;

export const ImageSlider: NextPage = () => {
  const selectedIndex = useSelector(selectImageState);
  const dispatch = useDispatch();
  const imageError = "Not supported!";
  return (
    <Box sx={{ width: "100%", height: "max-content" }}>
      <Grid ml={1} container spacing={1.4}>
        {images
          ? images.map((image, index) => (
              <Grid key={index} md={3}>
                <ButtonBase onClick={() => dispatch(changeIndex(index))}>
                  {index === selectedIndex ? (
                    <SelectedImageWrapper
                      src={images[selectedIndex]}
                      alt={imageError}
                    />
                  ) : (
                    <ImageWrapperSlide src={image} alt={imageError} />
                  )}
                </ButtonBase>
              </Grid>
            ))
          : null}
      </Grid>
    </Box>
  );
};
