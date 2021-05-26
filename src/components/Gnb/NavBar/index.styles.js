import styled from "styled-components";
import { device } from "../../../device";
import { COLORS, FONT_WEIGHT } from "../../../styles/constant";

export const NavBarContainer = styled.nav`
  background: white;
  position: fixed;
  top: 3.5em;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  border: 3px solid ${COLORS.darkGray};
  border-radius: 0 0 0.5em 0.5em;

  @media ${device.tablet} {
    height: 4em;
    top: 0;
  }

  > ul {
    height: calc(100% - 56px);
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
      font-size: 2.3em;
      font-weight: ${FONT_WEIGHT.semiBold};
      margin: 0.5em 0;
      border-bottom: 6px solid ${COLORS.lightSkyBlue};
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s;

      @media ${device.desktop} {
        border: none;
        font-size: 3em;

        &:hover {
          letter-spacing: 0.2em;
          border-bottom: 6px solid ${COLORS.orange};
        }
      }
    }
  }
`;
