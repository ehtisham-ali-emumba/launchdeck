import { Card, Col, Divider, Flex, Typography } from "antd";
import styled, { css } from "styled-components";
import { sizeMobile, sizeLg, sizeTablet } from "../../../utils";
import { Button } from "../../../components";
import { colors } from "../../../constants";

const { Title: TitleAntd, Text } = Typography;

export const Container = styled.div`
  margin-top: 150px;
  width: 100%;
  margin-right: 32px;
  padding-bottom: 82px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.875rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const Wrapper = styled.div`
  margin-top: 100px;
`;

export const Padder = styled.div`
  padding: 20px;
  ${sizeMobile(css`
    padding: 8px;
  `)}
`;
export const Container2 = styled.div``;

export const TourTitle = styled(TitleAntd)`
  &.ant-typography {
    color: #1c223b;
    font-weight: 700;
    font-size: 42px;
    line-height: 1.2;
    margin-bottom: 24px;

    ${sizeMobile(css`
      font-size: 32px;
      text-align: center;
    `)}
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-bottom: 16px;
`;
export const InfoBox = styled(Flex)`
  ${sizeMobile(css`
    flex-direction: column;
  `)}
`;
export const InfoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e7490;
  background-color: rgb(245, 245, 247);
  border-radius: 50%;
  padding: 4px;
  font-size: 18px;
`;

export const InfoText = styled(Text)`
  color: #6e7490;
  font-size: 16px;
  margin-left: 4px;
`;

export const PriceText = styled(Text)`
  color: #6e7490;
  font-size: 16px;
`;

export const DescriptionText = styled.p`
  text-align: center;
  margin: 16px 20px;
  font-size: 16px;
  line-height: 1.5;
`;

export const WrapperImages = styled(Flex)`
  height: 420px;
  margin: 10px;
  padding: 20px;

  ${sizeLg(css`
    flex-direction: column;
    height: auto;
  `)}
  ${sizeMobile(css`
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    height: auto;
  `)}
`;

export const GroupImageCol = styled(Col)`
  flex: 1;
  ${sizeTablet(css`
    margin-top: 30px;
  `)}
  ${sizeMobile(css`
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 0px;
  `)}
`;
export const ImageUI = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  margin-right: 12px;
  ${sizeMobile(css`
    margin-right: 0px;
  `)}
  ${sizeLg(css`
    margin-right: 0px;
    height: 400px;
  `)}
`;

export const SmallImage = styled.img`
  flex: 1;
  height: 190px;
  min-width: 300px;
  width: 100%;
  padding: 8px;
  object-fit: cover;
  border-radius: 24px;
  ${sizeLg(css`
    height: 320px;
  `)}
`;

export const BookNowButton = styled(Button)`
  align-self: center;
  width: 200px;
`;

export const InfoContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
`;

export const InfoRowBox = styled.div`
  display: flex;
  align-items: baseline;
  margin: 20px 0;
  ${sizeMobile(css`
    flex-direction: column;
  `)}
`;

export const LabelBox = styled(Text)`
  font-size: 16px;
  padding: 0 30px;
  min-width: 350px;
  font-weight: 600;
  color: #262626;
  max-width: 200px;
  flex: 1;
  ${sizeMobile(css`
    padding: 0;
    margin: 0;
    flex: 1;
  `)}
`;

export const Value = styled(Text)`
  font-size: 16px;
  color: #262626;
  flex: 1;
  ${sizeMobile(css`
    display: block;
  `)}
`;

export const StyledDivider = styled(Divider)`
  margin: 10px 0;
  background-color: #f0f0f0;
`;

export const TextDay = styled.span`
  font-size: 22px;
  font-weight: 500;
`;
export const TextWeather = styled.span`
  font-size: 22px;
  font-weight: 500;
`;
export const TextDetail = styled.span`
  font-size: 15px;
`;
export const ItinearyContainer = styled.div`
  padding: 20px;
  ${sizeMobile(css`
    padding: 0px;
  `)}
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px 0;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCard = styled(Card)`
  min-width: 400px;
  flex: 0 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${sizeMobile(css`
    min-width: 300px;
  `)}
  ul {
    padding-left: 20px;
    padding-top: 16px;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 28px;
    color: ${colors.neutralGray};
  }
`;
