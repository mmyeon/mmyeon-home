import React from "react";
import styled from "styled-components";
import { FONT_WEIGHT } from "../styles/constant";

const ButtonContainer = styled.button`
  background: ${(props) => props.backgroundColor};
  padding: 0.6em 2em;
  border: none;
  font-size: 0.75em;
  color: white;
  border-radius: 0.6em;
  margin-top: 0.4em;
  font-family: "Poppins", sans-serif;
  font-weight: ${FONT_WEIGHT.extraBold};
  cursor: pointer;
  letter-spacing: 2px;
`;

const Button = ({ title, backgroundColor }) => {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>{title}</ButtonContainer>
  );
};

export default Button;
