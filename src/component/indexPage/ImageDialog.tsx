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
import { ImageProps } from "./ImageContainerWrapper";

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

interface Props extends ImageProps {
  open: boolean;
  handleDialog: any;
}

export default function ImageDialog(props: Props) {
  const { open, index, handleChange, handleDialog, selectedImage, thumbnails } =
    props;
  const [isOpen, setOpen] = React.useState<boolean>(open);
  const [selected, setSelected] = React.useState(index);
  console.log("hello", props.index);
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <PaperWrapper>
        <Stack spacing={1}>
          <Box display="flex" justifyContent={"end"}>
            <CloseIconWrapper onClick={() => handleDialog()}>
              <CloseIcon />
            </CloseIconWrapper>
          </Box>
          <ImageWrapper src={selectedImage[index]} alt="" />
          <Container>
            <Grid container>
              {thumbnails
                ? thumbnails.map((image, i) => (
                    <Grid key={i} md={2}>
                      <ButtonBase onClick={() => setSelected(i)}>
                        {i === selected ? (
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
