import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Header, Logout, ProtectedRoute } from "../../components";

import arrow from "../../shared/images/arrow_back.png";
import postcardImage from "../../shared/images/postcard.png";

export const Postcard = () => {
  const history = useHistory();

  return (
    <ProtectedRoute>
      <PageWrapper>
        <Header>
          <GoBackContainer onClick={() => history.goBack()}>
            <GoBackArrow src={arrow} />
            <GoBackText>back</GoBackText>
          </GoBackContainer>
          <Logout text="Log out" />
        </Header>
        <ContentWrapper>
          <PostcardImage src={postcardImage} />
        </ContentWrapper>
      </PageWrapper>
    </ProtectedRoute>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const GoBackArrow = styled.img`
  height: 13px;
  width: 13px;
  margin-right: 8px;
`;

const GoBackText = styled.p`
  font-size: 14px;
  text-transform: uppercase;
`;

const PostcardImage = styled.img`
  max-width: 100%;
`;
