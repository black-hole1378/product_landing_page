import { NextPage } from "next";
import {
  Box,
  Stack,
  styled,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ContentContainerWrapper = styled(Box)`
  width: 100%;
  height: max-content;
  padding: 2rem;
`;

const ContainerWrapper = styled(Grid)`
  border-radius: 5px;
  background-color: hsl(223, 64%, 98%);
  align-items: center;
  justify-content: space-between;
`;

const HeadingWrappper = styled(Typography)`
  color: rgb(248, 159, 90);
  font-size: 0.8rem;
  font-weight: 600;
`;

const ContentContainer: NextPage = () => {
  return (
    <ContentContainerWrapper>
      <Stack spacing={3}>
        <HeadingWrappper variant="subtitle2">SNEAKERS COMPANY</HeadingWrappper>
        <Typography variant="h4" fontWeight={600} color={"text.primary"}>
          Fall Limited Edition Sneakers
        </Typography>
        <Typography fontWeight={300} variant="body2" color={"text.secondary"}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typography>
        <Stack spacing={1}>
          <Box display={"flex"} flexDirection="row" alignItems="center" gap={2}>
            <Typography variant="h5" fontWeight={600}>
              $125.00
            </Typography>
            <Box
              p={1}
              sx={{
                backgroundColor: "hsl(25, 100%, 94%)",
                borderRadius: "5px",
              }}
            >
              <HeadingWrappper fontWeight={900}>50%</HeadingWrappper>
            </Box>
          </Box>
          <Typography
            color={"hsl(219, 9%, 45%)"}
            variant="body2"
            sx={{ textDecoration: "line-through" }}
            fontWeight={300}
          >
            $250.00
          </Typography>
        </Stack>
        <Grid container sx={{ alignItems: "center" }} columnSpacing={2}>
          <ContainerWrapper item md={4} sm={12} container>
            <Grid item>
              <IconButton color="warning">
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color={"text.primary"}>
                2
              </Typography>
            </Grid>
            <Grid item>
              <IconButton color="warning">
                <AddIcon />
              </IconButton>
            </Grid>
          </ContainerWrapper>
          <Grid item mt={{ xs: "14px", md: "0px" }} md={6} xs={12}>
            <Button
              variant="contained"
              sx={{ fontSize: "12px", fontWeight: "bolder", width: "100%" }}
              color="warning"
            >
              <ShoppingCartIcon fontSize="small" /> &nbsp; Add to Card
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </ContentContainerWrapper>
  );
};

export default ContentContainer;
