import styled, { css } from "styled-components";
import { COLORS } from "../../../styles/constant";
import { device } from "../../../device";
import { reveal, shake } from "../../../styles/animation";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: repeating-linear-gradient(
    to right,
    ${COLORS.pastelBlue},
    ${COLORS.pastelBlue} 20px,
    rgba(25, 71, 229, 0.46) 20px,
    rgba(25, 71, 229, 0.46) 40px
  );

  box-sizing: border-box;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3em;
    background: repeating-linear-gradient(
      to right,
      ${COLORS.pastelBlue},
      ${COLORS.pastelBlue} 6em,
      rgba(25, 71, 229, 0.46) 6em,
      rgba(25, 71, 229, 0.46) 7em
    );
  }

  > .content-wrapper {
    transition: opacity 0.3s;

    ${(props: { isVisible: boolean }) => {
      if (!props.isVisible)
        return css`
          opacity: 0;
        `;
    }}

    @media ${device.tablet} {
      display: flex;
      flex-direction: row;
    }

    > .content {
      max-width: 100%;
      margin: 0 auto;

      @media ${device.tablet} {
        margin: 0;
      }

      > h1 {
        text-align: center;

        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.25s;
            `;
        }}
      }

      > .btn-container {
        width: 100%;
        margin-top: 0.5em;
        transition: all 0.3s;

        > li > a {
          @media ${device.tablet} {
            &:hover {
              letter-spacing: 4px;
            }
          }
        }

        ${(props) => {
          if (props.isVisible) {
            return css`
              > li:nth-child(1) {
                opacity: 0;
                animation: ${reveal} 1s forwards 0.5s;
              }
              > li:nth-child(2) {
                opacity: 0;
                animation: ${reveal} 1s forwards 0.75s;
              }
              > li:nth-child(3) {
                opacity: 0;
                animation: ${reveal} 1s forwards 1s;
              }
            `;
          }
        }}

        @media ${device.tablet} {
          max-width: 80%;
          display: block;
          margin: 1em auto;
        }
      }
    }

    > img.jumping {
      width: 14em;
      display: block;
      margin: 0 auto;
      margin-top: 2em;
      opacity: 0;

      ${(props) => {
        if (props.isVisible)
          return css`
            animation: ${shake} 1s linear 1.25s forwards;
          `;
      }}

      @media ${device.tablet} {
        width: 20em;
        margin: 0;
      }

      @media ${device.desktop} {
        margin-left: 4em;
      }
    }
  }
`;
