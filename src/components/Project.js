import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constant";

const ProjectContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.lightBlue};
`;

const Project = () => {
  return <ProjectContainer id="project">Project</ProjectContainer>;
};

export default Project;
