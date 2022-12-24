import React from "react";
import { Box, styled, Grid, ButtonBase } from "@mui/material";
import { ImageProps } from "./ImageContainerWrapper";

export const ImageWrapperSlide = styled("img")`
  width: 100%;
  height: 100px;
  border-radius: 5px;
`;

export const SelectedImageWrapper = styled(ImageWrapperSlide)`
  opacity: 0.5;
`;

export const ImageSlider = (props: ImageProps) => {
  const { index, thumbnails, handleChange } = props;

  const imageError = "Not supported!";
  return (
    <Box
      display={{ xs: "none", md: "block" }}
      sx={{ width: "100%", height: "max-content" }}
    >
      <Grid ml={1} container spacing={1.4}>
        {thumbnails
          ? thumbnails.map((image, i) => (
              <Grid key={i} md={3}>
                <ButtonBase onClick={() => handleChange(i)}>
                  {index === i ? (
                    <SelectedImageWrapper src={image} alt={imageError} />
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
