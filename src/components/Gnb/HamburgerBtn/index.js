import React from "react";
import * as Styled from "./index.styles";

const HamburgerBtn = ({ toggleNavBar, isNavBarOpen }) => {
  return (
    <Styled.HamburgerBtnContainer isNavBarOpen={isNavBarOpen}>
      <div className="menu-btn-burger" onClick={toggleNavBar}></div>
    </Styled.HamburgerBtnContainer>
  );
};

export default HamburgerBtn;
