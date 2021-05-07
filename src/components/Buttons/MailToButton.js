import React from "react";
import { device } from "../../device";
import { COLORS } from "../../styles/constant";
import Button from "./Button";
import styled from "styled-components";

const StyledLink = styled.a`
  > button {
    @media ${device.tablet} {
      font-size: 1.2em;
      left: 8em;
      position: relative;
      margin-top: 1em;
    }
  }
`;

const EmailButton = ({ title }) => {
  return (
    <StyledLink href="mailto:mindfulyeon@gmail.com?subject=당신과 함께 일해보고 싶어요.">
      <Button title={title} backgroundColor={`${COLORS.orange}`} />
    </StyledLink>
  );
};

export default EmailButton;
