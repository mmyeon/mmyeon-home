import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { FONT_WEIGHT } from "../styles/constant";

const StyledTitle = styled.h1`
  font-size: 1.87em;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1.2;
  letter-spacing: 0.07em;
  word-break: keep-all;

  @media ${device.tablet} {
    font-size: 2em;
  }

  @media ${device.desktop} {
    font-size: 2.8em;
    text-align: left;
  }
`;

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
