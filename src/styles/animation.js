import { keyframes } from "styled-components";

export const reveal = keyframes`
    \ 0% {
      transform: translateY(20px);
    }
    \ 100% {
      opacity: 1;
      }
`;

export const flyIn = keyframes`
    \ 0% {
      transform: translate(500px, 10%);
    }
    \ 100% {
      opacity: 1;
      transform: translate(0, 0);
      }
`;

export const fillBackgroundColor = keyframes`
    \ 0% {
      background-position: 0% 0%;
    }
    \ 50% {
      background-position: 50% 50%;
    }
    \ 100% {
      background-position: 50% 50%;
      }
`;

export const moveUpDown = keyframes`
    \ 0% {
      transform: translate(-50%, -2.5em);
    }
    \ 50% {
      transform: translate(-50%, -2em);
    }
    \ 100% {
      transform: translate(-50%, -2.5em);
      }
`;
