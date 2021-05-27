import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { COLORS } from "../styles/constant";
import { device } from "../device";

const StyledButtonWithOutline = styled.a`
  > button {
    background: ${COLORS.white};
    color: ${COLORS.darkBlue};
    border: 4px solid ${COLORS.darkBlue};
    font-size: 1.75em;
    width: 100%;
    padding: 0.1em 0.4em;
    letter-spacing: 1px;
    transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius: 0.5em;

    @media ${device.tablet} {
      &:hover {
        letter-spacing: 4px;
      }
    }
  }
`;

const ButtonWithOutline = ({ title, link }) => {
  return (
    <StyledButtonWithOutline href={link} target="_blank">
      <Button title={title} />
    </StyledButtonWithOutline>
  );
};

export default ButtonWithOutline;
