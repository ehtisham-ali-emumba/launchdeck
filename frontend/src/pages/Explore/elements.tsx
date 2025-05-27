import styled, { css } from "styled-components";
import { images_png } from "../../assets";
import { Card, Flex, Typography } from "antd";
import { Button } from "../../components";
import { sizeLg, sizeMobile } from "../../utils";
import { colors } from "../../constants";

const { Text, Title } = Typography;
export const ImageBannerBackgroundWrapper = styled.div`
  background: url(${images_png.exploreBanner});
  background-size: cover;
  height: 480px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  ${sizeLg(css`
    height: 450px;
  `)}
`;

export const CardUI = styled(Card)`
  border-radius: 20px;
  padding: 0px 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  margin-bottom: -63px;
  height: auto;
  ${sizeMobile(css`
    &&.ant-card {
      margin-bottom: -153px;
      min-width: 280px;
    }
  `)};
  ${sizeLg(css`
    margin-bottom: -210px;
    min-width: 400px;
  `)};
`;

export const IconCircle = styled.div`
  background-color: #f0f0f0;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  margin-top: 4px;
`;

export const HeaderText = styled.div`
  font-weight: bold;
  color: #1e1e2f;
  font-size: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 280px;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #e0e0e0;
  height: 60px;
  margin: 0 52px 0 16px;
  ${sizeMobile(css`
    height: 1px;
    width: 270px;
    margin: 20px 0px;
  `)};
`;

export const SearchButton = styled((props) => (
  <Button variant="primary" {...props} />
))`
  border-radius: 16px;
  padding: 20px 12px;
  height: 90px;

  ${sizeLg(css`
    height: 50px;
    margin-top: 20px;
  `)};
`;

export const PopularSearchBox = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  margin-top: 100px;
`;

export const StyledTitle = styled(Title)`
  &.ant-typography {
    font-size: 28px;
    ${sizeMobile(css`
      margin-bottom: 20px;
    `)}
  }
`;

export const ButtonWrapper = styled(Button)`
  min-width: 100px;
  margin: 8px 8px;
`;

export const ButtonText = styled(Text)`
  color: ${colors.neutralGray};
  font-size: 18px;
`;
export const SearchBox = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${sizeMobile(css`
    margin-top: 70px;
  `)}
  ${sizeLg(css`
    margin-top: 110px;
  `)}
`;

export const SearchFlexBox = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${sizeLg(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;
