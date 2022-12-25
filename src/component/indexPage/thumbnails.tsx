import React from "react";
import { Container, Grid, Box, ButtonBase } from "@mui/material";
import { ThumbnailsImage } from "./thumbnailImage";
interface Props {
  selected: number;
  handleChange: any;
  thumbnails: string[];
}

export const Thumbnails = (props: Props) => {
  const { selected, handleChange, thumbnails } = props;
  return (
    <Container>
      <Grid container spacing={2}>
        {thumbnails
          ? thumbnails.map((image, i) => (
              <Grid key={i} md={3}>
                <ButtonBase onClick={() => handleChange(i)}>
                  {i === selected ? (
                    <ThumbnailsImage url={image} selected={true} />
                  ) : (
                    <ThumbnailsImage url={image} selected={false} />
                  )}
                </ButtonBase>
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
};
