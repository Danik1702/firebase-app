import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import firebase from 'firebase';

import { ProtectedRoute, Header, Button, Logout, SocialList } from "../../components";
import { ROUTES, colors } from "../../shared";

export const Home = () => {
  const [loginsInfo, setLoginsInfo] = useState([]);

  const history = useHistory();
  const db = firebase.database();

  useEffect(() => {
    const dbLoginsinfo = db.ref('loginsInfo');

    dbLoginsinfo.on('value', elem => {
      setLoginsInfo(elem.val());
    });
  }, []);

  const data = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
  ];

  const getChartData = () => {
    const currentDate = new Date().getTime();

    let lastLogins = loginsInfo.filter(el => Number(((currentDate - el.time) / 1000 / 60 / 60).toFixed(2)) < 4);
    let counter = 0;

    return data.map(elem => {
      const newElem = { ...elem };

      lastLogins = lastLogins.filter(el => Number(((currentDate - el.time) / 1000 / 60 / 60).toFixed(2)) > Number(elem.name) - 1);

      newElem.uv = lastLogins.length + counter;
      counter += lastLogins.length;

      return newElem;
    })
  }

  return (
    <ProtectedRoute>
      <PageWrapper>
        <Header>
          <Button
            text="get started"
            onClick={() => history.push(ROUTES.postcard)}
          />
          <Logout text="Log out" />
        </Header>
        <ContentWrapper>
          <ContentHeader>Logs info</ContentHeader>
          <ContentText>See below the time and logs info</ContentText>
          <GraphContainer>
            <LineChart
              width={window.innerWidth < 900 ? 500 : 900}
              height={300}
              data={getChartData()}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </GraphContainer>
          <SocialListContainer>
            <SocialList />
          </SocialListContainer>
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
  flex-direction: column;
  align-items: center;
`;

const ContentHeader = styled.p`
  font-size: 37px;
  line-height: 43px;
  margin-top: 62px;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 13px;
`;

const GraphContainer = styled.div`
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${colors.lightGrey};
  border-radius: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialListContainer = styled.div`
  margin-top: 58px;
`;