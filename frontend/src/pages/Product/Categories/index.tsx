import { Typography } from "antd";
import { Container, ContentWrapper } from "~/styles";
import { Box } from "../Landscape/elements";
import { Spacer } from "~/components";
import { ProductCard } from "./ProductCard";

const { Title, Text } = Typography;

export const CategoriesPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <Box>
          <Title level={2}>Product Categories</Title>
          <Text
            type="secondary"
            style={{ marginBottom: "40px", display: "block", fontSize: "18px" }}
          >
            Explore our wide range of product categories.
          </Text>
          <ProductCard />
          <Spacer marginTop="30px" />
          <ProductCard />
          <Spacer marginTop="30px" />
          <ProductCard />
        </Box>
      </ContentWrapper>
    </Container>
  );
};
