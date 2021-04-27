import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constant";

const LearningContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.pink};
`;

const Learning = () => {
  return <LearningContainer id="learning">Learning</LearningContainer>;
};

export default Learning;
