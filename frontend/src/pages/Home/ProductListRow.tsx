import { MessageOutlined, UpOutlined } from "@ant-design/icons";

import {
  Row,
  Index,
  AppIcon,
  Info,
  TitleProductRow,
  Description,
  Tags,
  Tag,
  Stats,
  StatBox,
  StyledLink,
  ProductRowContent,
} from "./elements";
import type { ProductListRowProps } from "./type";
export const ProductListRow = (props: ProductListRowProps) => {
  const { index, product } = props;
  const { _id, name, description, tags, image } = product;

  return (
    <StyledLink to={`/products/${_id}`}>
      <Row>
        <AppIcon src={image} alt={name} />
        <ProductRowContent>
          <Info>
            <TitleProductRow>
              <Index>{index}.</Index>
              {name}
            </TitleProductRow>
            <Description>{description}</Description>
            <Tags>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </Tags>
          </Info>
          <Stats>
            <StatBox>
              <MessageOutlined style={{ fontSize: 18, color: "#8c8c8c" }} />
              {4}
            </StatBox>
            <StatBox>
              <UpOutlined style={{ fontSize: 18, color: "#8c8c8c" }} />
              {12}
            </StatBox>
          </Stats>
        </ProductRowContent>
      </Row>
    </StyledLink>
  );
};
