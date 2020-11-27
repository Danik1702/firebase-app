import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { useHistory, Redirect } from "react-router-dom";

import { ROUTES } from "../../shared";
import { Button } from "../../components";
import { colors } from "../../shared";

export const Login = () => {
  const [loginsCount, setLoginsCount] = useState(0);

  const history = useHistory();
  const token = localStorage.getItem("token");
  const db = firebase.database();

  useEffect(() => {    
    const loginsCount = db.ref('loginsCount');
    
    loginsCount.on('value', elem => {
      setLoginsCount(elem.val());
    });

  }, []);

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("token", result.credential.accessToken);
        db.ref('loginsInfo/' + (loginsCount)).set({ loginsCount: loginsCount + 1, time: new Date().getTime() });
        db.ref('loginsCount').set(loginsCount + 1);
        history.push(ROUTES.home);
      })
      .catch((error) => console.log("error", error));
  };

  const handleFacebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("token", result.credential.accessToken);
        db.ref('loginsInfo/' + (loginsCount)).set({ loginsCount: loginsCount + 1, time: new Date().getTime() });
        db.ref('loginsCount').set(loginsCount + 1);
        history.push(ROUTES.home);
      })
      .catch((error) => console.log(error));
  };

  return token ? (
    <Redirect to={{ pathname: ROUTES.home }} />
  ) : (
    <PageWrapper>
      <ContentWrapper>
        <ContentHeader>Login</ContentHeader>
        <ButtonWrapper>
          <Button text="Facebook" onClick={handleFacebookLogin} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button text="Google" onClick={handleGoogleLogin} />
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 70%;
  background-color: ${colors.lightGrey};
  border-radius: 21px;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContentHeader = styled.p`
  font-size: 47px;
  line-height: 55px;
  margin-top: 132px;
  margin-bottom: 118px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 41px;
  display: flex;
  justify-content: center;

  &:last-of-type {
    margin-bottom: 126px;
  }
`;
