import React from "react";
import styled from "styled-components";

import { colors } from "../../shared";

export const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  height: 132px;
  background-color: ${colors.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 35px;
`;
