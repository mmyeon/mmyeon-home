import styled, { css } from "styled-components";
import { device } from "../../../device";
import { reveal } from "../../../styles/animation";
import { COLORS } from "../../../styles/constant";

export const ProjectContainer = styled.div`
  background: ${COLORS.lightBlue};
  /* TODO:매번 컨테이너에 반복적으로 넣어주는데 개선하기: top에 공간주기 위에서 넣는 것  */
  width: 100%;
  height: auto;
  position: relative;

  > .content-container {
    display: flex;
    flex-direction: column;
    padding: 0 2em;
    padding-bottom: 3em;
    position: relative;

    @media ${device.tablet} {
      flex-direction: row;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      height: auto;
      padding-top: 3em;
    }

    > .title-container {
      display: flex;
      align-items: flex-end;
      flex-direction: row;
      justify-content: center;
      margin-top: 3em;

      @media ${device.tablet} {
        align-items: center;
        flex-direction: column;
        max-height: 100vh;
        margin-top: 0;
        position: sticky;
        top: 3.62em;
        bottom: 0;
      }

      > h1 {
        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.25s;
            `;
        }}
      }

      > .dog-img {
        width: 45%;
        max-width: 28.1em;

        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: ${reveal} 1s forwards 0.5s;
            `;
        }}

        @media ${device.tablet} {
          margin-top: 1.5em;
        }
      }
    }

    > .project-desc {
      ${(props) => {
        if (props.isVisible)
          return css`
            opacity: 0;
            animation: ${reveal} 1s forwards 0.75s;
          `;
      }}

      @media ${device.tablet} {
        height: auto;
        margin-top: 0;
        padding-top: 10em;
        padding-left: 2em;
      }
    }
  }
`;
