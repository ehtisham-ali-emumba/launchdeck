import { HomeContainer } from "./elements";
import { Spacer } from "../../components";
import { ContentWrapper } from "../../styles";
import { WelcomeBanner } from "./WelcomeBanner";
import { ProductList } from "./ProductList";

export const Home = () => {
  return (
    <HomeContainer>
      <ContentWrapper>
        <WelcomeBanner />
        <Spacer marginTop="80px" />
        <ProductList filter="today" />
        <Spacer marginTop="50px" />
        <ProductList filter="lastWeek" />
        <Spacer marginTop="50px" />
        <ProductList filter="lastMonth" />
        <Spacer marginTop="50px" />
        <ProductList filter="nextMonth" />
        <Spacer marginTop="50px" />
        <ProductList filter="nextWeek" />
      </ContentWrapper>
      <div style={{ marginTop: "80px" }} />
    </HomeContainer>
  );
};
