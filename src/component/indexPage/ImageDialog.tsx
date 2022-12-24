import {
  Dialog,
  Paper,
  styled,
  IconButton,
  Stack,
  Box,
  Grid,
  ButtonBase,
  Container,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ImageWrapper } from "./ImageContainer";
interface Props {
  open: boolean;
  index: number;
  selectedImages: string[];
  thumbleImage: string[];
  handleDialog: any;
}

const PaperWrapper = styled(Paper)(({ theme }) => ({
  width: "max-content",
  display: "block",
  minWidth: "560px",
  height: "max-content",
  minHeight: "560px",
  overflowX: "visible",
  padding: "4px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const CloseIconWrapper = styled(IconButton)`
  font-size: medium;
  color: hsl(26, 100%, 55%);
  width: 20px;
  margin: 10px;
`;

const ImageSlideWrapper = styled("img")`
  width: 100%;
  height: 60px;
  border-radius: 5px;
`;

const SelectedImageSlideWrapper = styled(ImageSlideWrapper)`
  opacity: 0.5;
`;

export default function ImageDialog(props: Props) {
  const [isOpen, setOpen] = React.useState<boolean>(props.open);
  const [selected, setSelected] = React.useState(props.index);
  console.log("hello", props.index);
  return (
    <Dialog open={props.open} onClose={() => setOpen(false)}>
      <PaperWrapper>
        <Stack spacing={1}>
          <Box display="flex" justifyContent={"end"}>
            <CloseIconWrapper onClick={() => props.handleDialog()}>
              <CloseIcon />
            </CloseIconWrapper>
          </Box>
          <ImageWrapper src={props.selectedImages[selected]} alt="" />
          <Container>
            <Grid container>
              {props.thumbleImage
                ? props.thumbleImage.map((image, index) => (
                    <Grid key={index} md={2}>
                      <ButtonBase onClick={() => setSelected(index)}>
                        {index === selected ? (
                          <SelectedImageSlideWrapper src={image} alt="Image" />
                        ) : (
                          <ImageSlideWrapper src={image} alt="Image" />
                        )}
                      </ButtonBase>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Container>
        </Stack>
      </PaperWrapper>
    </Dialog>
  );
}
