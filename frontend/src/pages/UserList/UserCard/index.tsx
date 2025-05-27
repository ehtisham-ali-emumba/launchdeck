import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { truncate } from "../../../utils";
import {
  UserInfoContainer,
  UserMetaInfo,
  UserMetaText,
  UserNameText,
} from "./elements";
import type { UserCardProps } from "./type";
import { cardDimensions, imageStyles } from "./utils";
import { Card } from "../../../components";

const UserCard: React.FC<UserCardProps> = ({
  userName,
  imageSrc,
  phone,
  email,
  city,
  country,
  onClick,
  fullName,
}) => {
  return (
    <Card
      url=""
      onClick={onClick}
      dimensions={cardDimensions}
      imageHeight={150}
      imageSrc={imageSrc}
      imageStyles={imageStyles}
      renderContent={() => (
        <>
          <UserNameText>{truncate(userName, 18, "...")}</UserNameText>
          <UserInfoContainer>
            {email && (
              <UserMetaInfo>
                <UserOutlined />
                <UserMetaText>{truncate(fullName, 25, "...")}</UserMetaText>
              </UserMetaInfo>
            )}
            {email && (
              <UserMetaInfo>
                <MailOutlined />
                <UserMetaText>{truncate(email, 22, "...")}</UserMetaText>
              </UserMetaInfo>
            )}
            {phone && (
              <UserMetaInfo>
                <PhoneOutlined />
                <UserMetaText>{phone}</UserMetaText>
              </UserMetaInfo>
            )}
            {city && (
              <UserMetaInfo>
                <EnvironmentOutlined />
                <UserMetaText>{city}</UserMetaText>
              </UserMetaInfo>
            )}
            {country && (
              <UserMetaInfo>
                <GlobalOutlined />
                <UserMetaText>{country}</UserMetaText>
              </UserMetaInfo>
            )}
          </UserInfoContainer>
        </>
      )}
    />
  );
};

export { UserCard };
