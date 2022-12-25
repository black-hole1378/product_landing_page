import { Dialog, Paper, styled, IconButton, Stack, Box } from "@mui/material";
import React from "react";
import { Thumbnails } from "./thumbnails";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ImageContainerWrapper from "./ImageContainer";
import { ImageProps } from "./ImageContainerWrapper";
import { ImageWrap } from "./image";

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

interface DialogProps extends ImageProps {
  handleDialog: any;
  open: boolean;
}

const ImageDialog = (props: DialogProps) => {
  const { open, index, handleDialog, selectedImage, thumbnails } = props;
  const [isOpen, setOpen] = React.useState<boolean>(open);
  const [selected, setSelected] = useState<number>(index);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <PaperWrapper>
        <Stack spacing={1}>
          <Box display="flex" justifyContent={"end"}>
            <CloseIconWrapper onClick={() => handleDialog()}>
              <CloseIcon />
            </CloseIconWrapper>
          </Box>
          <ImageWrap url={selectedImage[selected]} />
          <Thumbnails
            handleChange={setSelected}
            selected={selected}
            thumbnails={thumbnails}
          />
        </Stack>
      </PaperWrapper>
    </Dialog>
  );
};

export default ImageDialog;
