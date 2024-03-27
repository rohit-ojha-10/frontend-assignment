import React from "react";
import styled from "@emotion/styled";
import { User } from "./Form";

type UserDataProps = {
  data: User;
};

const UserDataContainer = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  align-self: center;
`;

const UserDataLabel = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const UserDataValue = styled.div`
  margin-bottom: 16px;
`;

const UserData: React.FC<UserDataProps> = ({ data }) => {
  const { name, role, email } = data;

  return (
    <UserDataContainer>
      <UserDataLabel>Name:</UserDataLabel>
      <UserDataValue>{name}</UserDataValue>

      <UserDataLabel>Role:</UserDataLabel>
      <UserDataValue>{role}</UserDataValue>

      <UserDataLabel>Email:</UserDataLabel>
      <UserDataValue>{email}</UserDataValue>
    </UserDataContainer>
  );
};

export default UserData;
