import { NextPage } from "next";
import { Box, Stack, styled, Typography } from "@mui/material";
import { ProductContainer } from "./ProductContainer";
const ContentContainerWrapper = styled(Box)`
  width: 100%;
  height: max-content;
  padding: 2rem;
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
        <ProductContainer />
      </Stack>
    </ContentContainerWrapper>
  );
};

export default ContentContainer;
