import React from "react";

import { UserOutlined } from "@ant-design/icons";

import { Card } from "~/components";
import { uiStrings } from "~/constants";

import { truncate } from "../../../../utils";
import { ContentBox } from "../elements";

import {
  UserInfoContainer,
  UserMetaInfo,
  UserMetaText,
  UserNameText,
} from "./elements";
import type { LandscapeCardProps } from "./type";
import { cardDimensions, descriptionMeta, imageStyles } from "./utils";

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
                  {truncate(
                    `${uiStrings.cofounderAt} ${user.designation}`,
                    22,
                    "..."
                  )}
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
