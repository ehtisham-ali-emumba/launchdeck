import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { truncate } from "../../../../utils";
import {
  UserInfoContainer,
  UserMetaInfo,
  UserMetaText,
  UserNameText,
} from "./elements";
import type { LandscapeCardProps } from "./type";
import { cardDimensions, imageStyles } from "./utils";
import { Card } from "~/components";
import { ContentBox } from "../elements";

const descriptionMeta = `The US spends about $4.9T on healthcare last year, much of it due to administrative waste or preventable chronic illness.`;
export const LandscapeCard: React.FC<LandscapeCardProps> = ({ landscape }) => {
  const { categoryId, description, user, image, name } = landscape;

  return (
    <Card
      url={`/categories/${categoryId}`}
      dimensions={cardDimensions}
      imageHeight={160}
      imageSrc={image}
      imageStyles={imageStyles}
      renderContent={() => (
        <ContentBox>
          <UserNameText>{truncate(name, 18, "...")}</UserNameText>
          <UserInfoContainer>
            {user?.name && (
              <UserMetaInfo>
                <UserOutlined />
                <UserMetaText>{truncate(user.name, 25, "...")}</UserMetaText>
              </UserMetaInfo>
            )}
            {user?.designation && (
              <UserMetaInfo>
                <UserMetaText>
                  {truncate(`Cofounder at ${user.designation}`, 22, "...")}
                </UserMetaText>
              </UserMetaInfo>
            )}
            {description && (
              <UserMetaInfo>
                <UserMetaText style={{ fontWeight: "400" }}>
                  {truncate(descriptionMeta, 65, "...")}
                </UserMetaText>
              </UserMetaInfo>
            )}
          </UserInfoContainer>
        </ContentBox>
      )}
    />
  );
};
