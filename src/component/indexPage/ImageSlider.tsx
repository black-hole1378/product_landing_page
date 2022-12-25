import React from "react";
import { Box } from "@mui/material";
import { ImageProps } from "./ImageContainerWrapper";
import { Thumbnails } from "./thumbnails";

export const ImageSlider = (props: ImageProps) => {
  const { index, thumbnails, handleChange } = props;

  return (
    <Box
      display={{ xs: "none", md: "block" }}
      sx={{ width: "100%", height: "max-content" }}
    >
      <Thumbnails
        thumbnails={thumbnails}
        handleChange={handleChange}
        selected={index}
      />
    </Box>
  );
};
