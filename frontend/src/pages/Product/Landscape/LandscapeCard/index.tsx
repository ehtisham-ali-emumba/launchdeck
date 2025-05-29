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
export const LandscapeCard: React.FC<LandscapeCardProps> = ({
  userName: categoryName,
  imageSrc,
  phone: description,
  email: designation,
  onClick,
  fullName: userName,
}) => {
  return (
    <Card
      url={`/categories/${categoryName}`}
      onClick={onClick}
      dimensions={cardDimensions}
      imageHeight={160}
      imageSrc={imageSrc}
      imageStyles={imageStyles}
      renderContent={() => (
        <ContentBox>
          <UserNameText>{truncate(categoryName, 18, "...")}</UserNameText>
          <UserInfoContainer>
            {userName && (
              <UserMetaInfo>
                <UserOutlined />
                <UserMetaText>{truncate(userName, 25, "...")}</UserMetaText>
              </UserMetaInfo>
            )}
            {designation && (
              <UserMetaInfo>
                <UserMetaText>
                  {truncate(`Cofounder at ${designation}`, 22, "...")}
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
