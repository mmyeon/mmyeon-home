import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import { COLORS } from "../../styles/constant";

const HambergurBtnContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;

  ${(props) =>
    props.isNavBarOpen &&
    css`
      border: 3px solid ${COLORS.darkGray};
      border-bottom: none;
      width: 100vw;
      height: 3.5em;
      background: ${COLORS.white};
    `}

  @media ${device.tablet} {
    display: none;
  }
`;

const HambergurBtn = ({ toggleNavBar, isNavBarOpen }) => {
  return (
    <HambergurBtnContainer isNavBarOpen={isNavBarOpen}>
      <button onClick={toggleNavBar}>내비게이션아 열려라</button>
    </HambergurBtnContainer>
  );
};

export default HambergurBtn;
