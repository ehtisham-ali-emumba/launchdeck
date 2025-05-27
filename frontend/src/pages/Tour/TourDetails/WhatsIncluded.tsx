import { Typography } from "antd";
import { uiStrings } from "../../../constants/uiStrings";
import {
  InfoContainer,
  InfoRowBox,
  LabelBox,
  StyledDivider,
  Value,
} from "./elements";

const { Title } = Typography;

export const WhatsIncluded = () => {
  return (
    <>
      <Title>{uiStrings.whatsIncluded}</Title>
      <InfoContainer>
        <InfoRowBox>
          <LabelBox>{uiStrings.destination}</LabelBox>
          <Value>{uiStrings.destinationValue}</Value>
        </InfoRowBox>
        <StyledDivider />
        <InfoRowBox>
          <LabelBox>{uiStrings.departureLoc}</LabelBox>
          <Value>{uiStrings.departureAddress}</Value>
        </InfoRowBox>
        <InfoRowBox>
          <LabelBox>{uiStrings.return}</LabelBox>
          <Value>{uiStrings.returnTime}</Value>
        </InfoRowBox>
        <InfoRowBox>
          <LabelBox>{uiStrings.return}</LabelBox>
          <Value>{uiStrings.additionalInfo}</Value>
        </InfoRowBox>
        <StyledDivider />
      </InfoContainer>
    </>
  );
};
