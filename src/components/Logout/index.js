import React from "react";
import styled from "styled-components";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

import { colors, ROUTES } from "../../shared";

export const Logout = ({ text }) => {
  const history = useHistory();

  const handleLogOutClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        history.push(ROUTES.login);
      })
      .catch((error) => console.log(error));
  };

  return <LogOutLink onClick={handleLogOutClick}>{text}</LogOutLink>;
};

const LogOutLink = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: ${colors.black};
  cursor: pointer;
`;
