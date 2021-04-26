import React from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

const NavBarContainer = styled.div`
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(100% - 6px);
  z-index: 20;
  border: 3px solid ${COLORS.darkGray};
  border-radius: 2em 2em 0 0;

  > .button-container {
    border-bottom: 2px solid ${COLORS.darkGray};
    width: 100vw;
    height: 2.5em;

    > button {
      cursor: pointer;
    }
  }

  > ul {
    height: calc(100% - 40px);
    /* height: calc(100% - 72px); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > li {
      font-size: 3em;
      font-weight: ${FONT_WEIGHT.semiBold};
      margin: 0.5em 0;
      border-bottom: 6px solid ${COLORS.lightSkyBlue};
      cursor: pointer;
    }
  }
`;

const NavBar = ({ closeNavBar }) => {
  return (
    <NavBarContainer>
      <div className="button-container">
        <button onClick={closeNavBar}>X</button>
      </div>
      <ul>
        <li>
          <a href="#home" onClick={closeNavBar}>
            HOME
          </a>
        </li>
        <li>
          <a href="#learning" onClick={closeNavBar}>
            LEARNING
          </a>
        </li>
        <li>
          <a href="#project" onClick={closeNavBar}>
            PROJECT
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeNavBar}>
            CONTACT
          </a>
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
