import { Flex } from "antd";
import { cityNames } from "./utils";
import { uiStrings } from "../../constants";
import { Link } from "react-router-dom";
import {
  ButtonText,
  ButtonWrapper,
  PopularSearchBox,
  SearchBox,
  StyledTitle,
} from "./elements";

export const PopularSearch = () => {
  return (
    <SearchBox>
      <PopularSearchBox>
        <StyledTitle>{uiStrings.popularSearch}</StyledTitle>
        <Flex wrap justify="center">
          {cityNames.map((item) => (
            <Link to={`/tours?city=${item.replace(" ", "")}`} key={item}>
              <ButtonWrapper variant="outlined">
                <ButtonText>{item}</ButtonText>
              </ButtonWrapper>
            </Link>
          ))}
        </Flex>
      </PopularSearchBox>
    </SearchBox>
  );
};
