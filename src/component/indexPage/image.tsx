import React from "react";
import { styled } from "@mui/material";

export const ImageWrapper = styled("img")`
  width: 100%;
  height: 380px;
  border-radius: 5px;
`;

export const ImageError = "Not supported";

export interface ImageProp {
  url: string;
}

export const ImageWrap = (props: ImageProp) => {
  return <ImageWrapper src={props.url} alt={ImageError} />;
};
