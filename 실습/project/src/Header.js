import {
    HeaderDiv,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
  } from "./styledComponent";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faMoon,
  } from "@fortawesome/free-solid-svg-icons";

const Header = (darkMode) => {
  return (
    <Header>
      <TitleLogoDiv>
        <TitleBig>멋사</TitleBig>
        <TitleSmall>익명게시판</TitleSmall>
      </TitleLogoDiv>
      <SubHeaderDiv>
        {darkMode ? (
          <div>
            <FontAwesomeIcon icon={faSun} />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        )}
      </SubHeaderDiv>
    </Header>
  );
};

export default Header;
