import { MessageOutlined, UpOutlined } from "@ant-design/icons";
import type { ProductListRowProps } from "./type";
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
} from "./elements";

export const ProductListRow = ({
  index,
  icon,
  title,
  description,
  tags,
  comments,
  upvotes,
}: ProductListRowProps) => (
  <Row>
    <AppIcon src={icon} alt={title} />
    <Info>
      <TitleProductRow>
        <Index>{index}.</Index>
        {title}
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
        {comments}
      </StatBox>
      <StatBox>
        <UpOutlined style={{ fontSize: 18, color: "#8c8c8c" }} />
        {upvotes}
      </StatBox>
    </Stats>
  </Row>
);
