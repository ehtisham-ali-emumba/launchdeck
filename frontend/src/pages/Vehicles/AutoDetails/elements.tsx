import styled, { css } from "styled-components";
import { Wrapper } from "../../../styles";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { sizeMobile } from "../../../utils";
import { colors } from "../../../constants";

export const { Title, Paragraph, Text } = Typography;

export const Container = styled(Wrapper)`
  justify-content: flex-start;
  height: 100vh;
  padding-bottom: 80px;
`;

export const Box = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const Heading = styled(Typography.Title)({
  textAlign: "center",
  marginBottom: "40px",
});

export const InputContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "20px 0px 25px 0px",
  width: "100%",
  gap: "10px",
});

export const GridWrapper = styled.div<{ width?: number }>`
  margin: 0 auto;
  width: ${(props) => props.width || "100%"};
`;

export const ListContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
`;

export const CarContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 32px auto;
  padding: 0 16px;
  gap: 32px;
  ${sizeMobile(css`
    gap: 16px;
    flex-direction: column;
    align-items: center;
  `)}
`;

export const CarImageContainer = styled.div`
  flex: 0 0 auto;
`;

export const CarImage = styled.img`
  width: 200px;
  height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  object-fit: cover;
`;

export const CarInfo = styled.div`
  flex: 1;
`;

export const CarTitle = styled.h1`
  font-size: 32px;
  color: #333;
  margin: 0 0 16px 0;
  line-height: 1.2;
  font-weight: 600;
`;

export const Manufacturer = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
`;

export const ManufacturerName = styled(Link)`
  color: #d32f2f;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StarRating = styled.div`
  color: #ffd700;
  font-size: 20px;
  margin-right: 8px;
`;

export const ReviewCount = styled.span`
  color: #666;
  font-size: 16px;
`;

export const CurrencySymbol = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #333;
`;

export const CarSpecsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  padding: 32px 64px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  ${sizeMobile(css`
    padding: 12px;
    max-width: 300px;
  `)}
`;

export const SpecsTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-right: 8px;
  font-weight: 600;
`;

export const SpecItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
`;

export const SpecLabel = styled.div`
  flex: 0 0 100px;
  font-weight: 600;
  color: #666;
  font-size: 16px;
  padding: 0 8px;
  min-width: 120px;
  text-transform: capitalize;
`;

export const SpecValue = styled.div`
  flex: 1;
  color: #333;
  font-size: 16px;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 120px;
`;

export const SpecActions = styled(SpecValue)`
  display: flex;
  gap: 12px;
  flex: 0 0 100px;
  justify-content: flex-end;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e1e4e8;
  margin: 8px 0;
  opacity: 0.6;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AutoMetaInfoContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 14px;
`;

export const AutoMetaText = styled(Text)`
  color: ${colors.text.primary};
  font-size: 14px;
  font-weight: 500;
  background-color: ${colors.chip};
  padding: 4px 16px;
  border-radius: 50px;
`;
