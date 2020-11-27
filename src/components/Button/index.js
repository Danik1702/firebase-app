import React from "react";
import styled from "styled-components";

import { colors } from "../../shared";

export const Button = ({ text, width, height, onClick }) => {
  return (
    <ButtonWrapper width={width} height={height} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: ${(props) => props.width || "262px"};
  height: ${(props) => props.height || "63px"};
  background-color: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 63px;
  cursor: pointer;
  transition-duration: 1s;

  &:hover {
    color: ${colors.wite};
    background-color: ${colors.darkGray};
  }
`;

const ButtonText = styled.p`
  font-size: 27px;
  text-transform: capitalize;
`;
