import React from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../styles/constant";
import { device } from "../device";

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
  letter-spacing: 2px;

  @media ${device.tablet} {
    font-size: 1.2em;
    left: 8em;
    position: relative;
    margin-top: 1em;
  }
`;

const Button = ({ title }) => {
  return <ButtonContainer>{title}</ButtonContainer>;
};

export default Button;
