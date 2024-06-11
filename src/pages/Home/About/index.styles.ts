import styled, { css } from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../../styles/constant";
import { device } from "../../../device";
import {
  reveal,
  fillBackgroundColor,
  flyInFromRight,
  moveUpDown,
} from "../../../styles/animation";

export const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.yellow};
  position: relative;
  overflow: hidden;

  > .content-container {
    display: flex;
    align-items: center;
    max-width: 250px;
    margin: 0 auto;
    transition: opacity 0.3s;

    ${(props: { isVisible: boolean }) => {
      if (!props.isVisible) {
        return css`
          opacity: 0;
        `;
      }
    }}

    @media ${device.tablet} {
      max-width: 600px;
      margin: 0 auto;
    }

    @media ${device.desktop} {
      max-width: 900px;
      margin: 0 auto;
    }

    > .text-container {
      position: absolute;
      z-index: 10;
      top: 50%;
      transform: translate(0, -50%);
      width: 13em;

      @media ${device.tablet} {
        width: 20em;
      }

      > .title-container {
        line-height: 1.4;

        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.25s;
            `;
        }}

        >.text-small {
          font-size: 1.6em;
          font-weight: ${FONT_WEIGHT.semiBold};

          @media ${device.tablet} {
            font-size: 2.2em;
          }
        }

        > .name {
          font-size: 2.06em;
          font-weight: ${FONT_WEIGHT.bold};

          @media ${device.tablet} {
            font-size: 2.4em;
          }
        }

        > .job {
          font-size: 2.5em;
          font-weight: ${FONT_WEIGHT.extraBold};
          line-height: 1.1;

          @media ${device.tablet} {
            font-size: 3.3em;
            width: 200%;
            word-break: break-all;
          }
        }
      }

      > .desc {
        font-size: 1.06em;
        line-height: 1.6;
        font-weight: ${FONT_WEIGHT.regular};
        word-break: keep-all;
        letter-spacing: 0.8px;
        margin: 0.5em 0;

        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.5s;
            `;
        }}

        @media ${device.tablet} {
          font-size: 1.5em;
          width: 130%;
        }
        @media ${device.desktop} {
          width: 156%;
        }

        .highlight {
          background: linear-gradient(180deg, transparent 57%, #29fea6 47%);
          padding: 0 0.2em;
          background-size: 150% 150%;
          animation: ${fillBackgroundColor} 2s cubic-bezier(0.4, 0, 1, 1);
          animation-fill-mode: forwards;
        }

        > b {
          font-weight: 700;
          letter-spacing: 0.2em;
        }
      }

      > .button {
        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.75s;
              display: inline-block;
            `;
        }}

        @media ${device.desktop} {
          left: 90%;
        }

        @media ${device.tablet} {
          position: relative;
          margin-top: 1em;
          font-size: 1.2em;
          left: 60%;
        }
      }
    }

    > .blob {
      position: relative;
      width: 17em;
      left: -1.5em;
      top: 5em;

      @media ${device.tablet} {
        width: 24em;
        left: -1em;
        top: 7em;
      }

      @media ${device.desktop} {
        width: 33em;
        left: -1em;
        top: -16em;
      }
    }

    > .walking-girl {
      position: relative;
      width: 16em;
      padding: 3em 0;
      right: 9.5em;
      top: 3em;

      ${(props) => {
        if (props.isVisible)
          return css`
            opacity: 0;
            animation: ${flyInFromRight} 1s forwards 1s;
          `;
      }}

      @media ${device.tablet} {
        width: 30em;
        right: 10em;
      }

      @media ${device.desktop} {
        width: 42em;
        right: 10em;
      }
    }

    > .downward-arrow {
      width: 3em;
      height: 3em;
      position: absolute;
      bottom: 10%;
      left: 50%;
      animation: ${moveUpDown} 0.9s infinite;
    }
  }
`;
