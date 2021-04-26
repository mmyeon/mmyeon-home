import React from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../styles/constant";

const ButtonContainer = styled.button`
  background: ${COLORS.orange};
  padding: 0.6em 2em;
  border: none;
  font-size: 0.75em;
  color: white;
  border-radius: 0.6em;
  margin-top: 0.5em;
  font-family: "Poppins", sans-serif;
  font-weight: ${FONT_WEIGHT.extraBold};
  cursor: pointer;
`;

const Button = ({ title }) => {
  return <ButtonContainer>{title}</ButtonContainer>;
};

export default Button;
