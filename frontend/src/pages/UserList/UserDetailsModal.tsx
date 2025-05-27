import React from "react";
import { Modal } from "antd";
import type { UserDetailsModalProps } from "./type";
import { UserDetailsContainer, UserImage } from "./elements";
import { uiStrings } from "../../constants";

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  user,
  onClose,
}) => {
  if (!user) return null;
  return (
    <Modal open={!!user} onCancel={onClose} footer={null}>
      <UserDetailsContainer>
        <UserImage
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          <b>{uiStrings.email}:</b> {user.email}
        </p>
        <p>
          <b>{uiStrings.phone}:</b> {user.phone}
        </p>
        <p>
          <b>{uiStrings.age}:</b> {user.dob.age} years old
        </p>
        <p>
          <b>{uiStrings.street}:</b>
          {user.location.street
            ? `${user.location.street.number} ${user.location.street.name}`
            : uiStrings.nA}
        </p>
        <p>
          <b>{uiStrings.city}:</b> {user.location.city}
        </p>
        <p>
          <b>{uiStrings.country}:</b> {user.location.country}
        </p>
        <button onClick={onClose}>{uiStrings.close}</button>
      </UserDetailsContainer>
    </Modal>
  );
};
