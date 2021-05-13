import React from "react";
import styled from "styled-components";
import About from "./About";
import Learning from "./Learning";
import Project from "./Project";
import Contact from "./Contact";
import Gnb from "../../components/Gnb";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <Gnb />
      <HomeContainer>
        <About />
        <Learning />
        <Project />
        <Contact />
      </HomeContainer>
    </>
  );
};

export default Home;
