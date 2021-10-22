import React from "react";
import styled, { css } from "styled-components";
import { device } from "../device";
import { COLORS, FONT_WEIGHT } from "../styles/constant";

const ButtonContainer = styled.a`
  background: ${(props) => props.backgroundColor || `${COLORS.darkGray}`};
  color: ${(props) => props.color || `${COLORS.white}`};
  padding: 0.6em 2em;
  border: none;
  font-size: 0.75em;
  border-radius: 0.6em;
  margin-top: 0.4em;
  font-family: "Poppins", sans-serif;
  font-weight: ${FONT_WEIGHT.extraBold};
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${({ type }) => {
    if (type === "withOutline") {
      return css`
        background: ${COLORS.white};
        border: 3px solid ${(props) => props.color};
        color: ${(props) => props.color};
        font-size: 1.75em;
        padding: 0.3em 0.8em;

        letter-spacing: 1px;
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
        border-radius: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;

        @media ${device.tablet} {
          &:hover {
            letter-spacing: 4px;
          }
        }
      `;
    }
  }}
`;

const Button = ({ type, title, backgroundColor, color, href }) => {
  return (
    <ButtonContainer
      type={type}
      href={href}
      backgroundColor={backgroundColor}
      color={color}
      target="_blank"
      className="button"
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
