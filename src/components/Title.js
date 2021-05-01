import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { FONT_WEIGHT } from "../styles/constant";

const StyledTitle = styled.span`
  font-size: 1.87em;
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 1.3;
  letter-spacing: 0.07em;

  @media ${device.desktop} {
    font-size: 2.8em;
    text-align: left;
  }
`;

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
