import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { COLORS, FONT_WEIGHT } from "../styles/constant";

const Container = styled.a`
  width: 5.6em;
  height: 5.8em;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  border: 2px solid ${COLORS.darkGray};
  z-index: 1;
  font-weight: ${FONT_WEIGHT.semiBold};
  font-size: 1.12em;
  padding: 0 0.5em;
  line-height: 1.2;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: all 0.3s;

  @media ${device.desktop} {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const RoundedRectangle = ({ title, className, url, backgroundColor }) => {
  return (
    <Container
      role="button"
      href={url}
      className={className}
      target="_blank"
      backgroundColor={backgroundColor}
    >
      {title}
    </Container>
  );
};

export default RoundedRectangle;
