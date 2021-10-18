import React from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../styles/constant";

const ButtonContainer = styled.button`
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

const Button = ({ title, backgroundColor, color }) => {
  return (
    <ButtonContainer backgroundColor={backgroundColor} color={color}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
