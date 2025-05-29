import { Container, ContentWrapper } from "~/styles";
import { Box } from "../Landscape/elements";
import { Spacer } from "~/components";
import { ProductDetailsCard } from "./ProductDetailsCard";

export const ProductDetailsPage = () => {
  return (
    <Container style={{ height: "auto" }}>
      <ContentWrapper>
        <Box>
          <ProductDetailsCard />
          <Spacer marginTop="50px" />
        </Box>
      </ContentWrapper>
    </Container>
  );
};
