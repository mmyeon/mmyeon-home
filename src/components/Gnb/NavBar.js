import React from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

const NavBarContainer = styled.div`
  background: white;
  position: fixed;
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
      text-transform: uppercase;
    }
  }
`;

const NavBar = ({ closeNavBar }) => {
  const navBarList = ["home", "learning", "project", "contact"];

  return (
    <NavBarContainer>
      <div className="button-container">
        <button onClick={closeNavBar}>X</button>
      </div>
      <ul>
        {navBarList.map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={closeNavBar}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
