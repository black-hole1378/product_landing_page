import { styled } from "@mui/material";
import { ImageError, ImageProp } from "./image";

export const ThumbnailImage = styled("img")`
  width: 100%;
  height: 80px;
  border-radius: 5px;
`;

export const SelectedThumbnailImage = styled(ThumbnailImage)`
  opacity: 0.5;
`;

interface Props extends ImageProp {
  selected: boolean;
}

export const ThumbnailsImage = (props: Props) => {
  if (props.selected)
    return <SelectedThumbnailImage src={props.url} alt={ImageError} />;
  else return <ThumbnailImage src={props.url} alt={ImageError} />;
};
