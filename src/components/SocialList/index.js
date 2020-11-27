import React from "react";
import styled from "styled-components";

import instagram from "../../shared/icons/instagram.png";
import facebook from "../../shared/icons/facebook.png";
import youtube from "../../shared/icons/youtube.png";
import twitter from "../../shared/icons/twitter.png";
import linkedIn from "../../shared/icons/linkedIn.png";

const socialList = [
  { social: facebook, id: 1 },
  { social: instagram, id: 2 },
  { social: youtube, id: 3 },
  { social: twitter, id: 4 },
  { social: linkedIn, id: 5 },
];

export const SocialList = () => {
  const renderList = socialList.map((elem) => (
    <SocialItem src={elem.social} key={elem.id} />
  ));

  return <SocialItemsLIst>{renderList}</SocialItemsLIst>;
};

const SocialItemsLIst = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const SocialItem = styled.img`
  width: 49px;
  height: 49px;
  cursor: pointer;
`;
