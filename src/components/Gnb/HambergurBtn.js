import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import { COLORS } from "../../styles/constant";

const HambergurBtnContainer = styled.div`
  position: fixed;
  width: 3.7em;
  height: 3.7em;
  top: 0;
  right: 0;
  z-index: 30;

  ${(props) =>
    props.isNavBarOpen &&
    css`
      border: 3px solid ${COLORS.darkGray};
      border-bottom: none;
      width: 100vw;
      height: 3.5em;
      background: ${COLORS.white};
      top: 0;
      right: 0;
    `}

  @media ${device.tablet} {
    display: none;
  }

  > .menu-btn-burger {
    position: fixed;
    top: 4.5%;
    right: 3%;
    width: 2.4em;
    height: 0.4em;
    background: ${COLORS.darkGray};
    transition: 0.5s;
    border-radius: 5px;

    ${(props) =>
      props.isNavBarOpen &&
      css`
        background: transparent;
      `}

    &::before,
    ::after {
      content: "";
      position: absolute;
      width: 2.5em;
      height: 0.4em;
      background: ${COLORS.darkGray};
      border-radius: 5px;
      transition: 0.5s;
    }

    &::before {
      top: -14px;
      width: 70%;

      ${(props) =>
        props.isNavBarOpen &&
        css`
          width: 100%;
          top: 0;
          transform: rotate(45deg);
        `}
    }

    &::after {
      top: 14px;
      width: 70%;

      ${(props) =>
        props.isNavBarOpen &&
        css`
          width: 100%;
          top: 0;
          transform: rotate(135deg);
        `}
    }
  }
`;

const HambergurBtn = ({ toggleNavBar, isNavBarOpen }) => {
  return (
    <HambergurBtnContainer isNavBarOpen={isNavBarOpen}>
      <div className="menu-btn-burger" onClick={toggleNavBar}></div>
    </HambergurBtnContainer>
  );
};

export default HambergurBtn;
