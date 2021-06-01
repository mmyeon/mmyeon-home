import styled, { css } from "styled-components";
import { device } from "../../../device";
import { flyInFromLeft, reveal } from "../../../styles/animation";
import { COLORS, FONT_WEIGHT } from "../../../styles/constant";

export const LearningContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.pink};
  word-break: keep-all;
  text-align: center;

  @media ${device.desktop} {
    text-align: left;
  }

  > .content-container {
    height: 100vh;
    margin: 0 auto;
    padding: 3em 1em;
    overflow: hidden;
    position: relative;

    @media ${device.tablet} {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;
      padding: 0 2em;
      padding-top: 3.6em;
    }

    @media ${device.desktop} {
      max-width: 1000px;
      padding-top: 0;
    }

    .content {
      position: relative;

      > h1 {
        ${(props) => {
          if (props.isVisible) {
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.5s;
            `;
          }
        }}
      }

      > .avatar-talk {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5em 0;

        ${(props) => {
          if (props.isVisible) {
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.75s;
            `;
          }
        }}

        @media ${device.tablet} {
          flex-direction: row;
        }

        > .avatar-img {
          width: 4.5em;
          margin-right: 1em;
        }

        > .avatar-desc {
          font-size: 1.07em;
          letter-spacing: 0.05em;
          font-weight: ${FONT_WEIGHT.regular};
          line-height: 1.3;
          margin-top: 1em;

          @media ${device.tablet} {
            font-size: 1.3em;
            margin-top: 0em;
            text-align: left;
          }
        }
      }

      > .links {
        max-width: 300px;
        margin: 0 auto;
        display: grid;
        justify-items: center;
        column-gap: 13px;
        row-gap: 15px;
        grid-template-columns: 100px 100px;
        justify-content: center;
        text-align: center;

        ${(props) => {
          if (props.isVisible) {
            return css`
              > .block:nth-child(1) {
                opacity: 0;
                animation: ${reveal} 1s forwards 1s;
              }

              > .block:nth-child(2) {
                opacity: 0;
                animation: ${reveal} 1s forwards 1.25s;
              }

              > .block:nth-child(3) {
                opacity: 0;
                animation: ${reveal} 1s forwards 1.5s;
              }
            `;
          }
        }}

        > .block:nth-child(3) {
          grid-column: 2 / 2;
          grid-row: 2 / 3;

          @media ${device.tablet} {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
          }
        }
      }
    }
    > .rocket-img {
      position: relative;
      width: 19em;
      top: -11.5em;
      left: -7.5em;
      transform: rotate(0deg) translate(2px, 11px);

      ${(props) => {
        if (props.isVisible) {
          return css`
            opacity: 0;
            animation: ${flyInFromLeft} 1s forwards 0.25s;
          `;
        }
      }}

      @media ${device.tablet} {
        width: 25em;
        top: 0;
        left: 0;
        grid-row: 1/2;
        justify-self: center;
      }

      @media ${device.desktop} {
        width: 36.3em;
        top: 0;
        left: 0;
        justify-self: end;
      }
    }
  }
`;
