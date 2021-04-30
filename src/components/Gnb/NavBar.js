import React from "react";
import styled from "styled-components";
import { device } from "../../device";
import { COLORS, FONT_WEIGHT } from "../../styles/constant";

const NavBarContainer = styled.div`
  background: white;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 20;
  border: 3px solid ${COLORS.darkGray};
  border-radius: 2em 2em 0 0;

  @media ${device.tablet} {
    height: 4em;
  }

  > .button-container {
    border-bottom: 2px solid ${COLORS.darkGray};
    width: 100vw;
    height: 2.5em;

    @media ${device.tablet} {
      display: none;
    }

    > button {
      cursor: pointer;
    }
  }

  > ul {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      flex-direction: row;
      height: 100%;
      justify-content: space-around;
      font-size: 0.5rem;
    }

    > li {
      font-size: 3em;
      font-weight: ${FONT_WEIGHT.semiBold};
      margin: 0.5em 0;
      border-bottom: 6px solid ${COLORS.lightSkyBlue};
      cursor: pointer;
      text-transform: uppercase;
      transition: letter-spacing 0.8s;

      @media ${device.desktop} {
        &:hover {
          letter-spacing: 0.3em;
          border-bottom: 6px solid ${COLORS.orange};
        }
      }
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
