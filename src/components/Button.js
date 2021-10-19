import React from "react";
import styled from "styled-components";
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
`;

const Button = ({ title, backgroundColor, color, href }) => {
  return (
    <ButtonContainer
      href={href}
      backgroundColor={backgroundColor}
      color={color}
      target="_blank"
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
