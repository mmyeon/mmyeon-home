import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constant";
import BoxWithIndex from "./BoxWithIndex";
import Title from "./Title";

const ProjectContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${COLORS.lightBlue};
  /* TODO:매번 컨테이너에 반복적으로 넣어주는데 개선하기: top에 공간주기 위에서 넣는 것  */
  padding: 3em 1.5em;

  > .title-container {
    display: flex;
    align-items: flex-end;
    flex-direction: row;

    > .dog-img {
      width: 45%;
      max-width: 30.1em;
    }
  }
`;

const Project = () => {
  const projectList = [
    {
      title: "DogIn",
      img: "/assets/images/project-dog.png",
      desc: "강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.",
      link: "https://dogin.mmyeon.com/",
    },
    {
      title: "DogIn2",
      img: "/assets/images/project-dog.png",
      desc:
        "강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.",
      link: "https://dogin.mmyeon.com/",
    },
  ];

  return (
    <ProjectContainer id="project">
      <div className="title-container">
        <Title
          text="요가와 개를 좋아하는 
개발자는 이런 걸 만듭니다."
        />
        <img
          className="dog-img"
          src="/assets/images/project-dog.png"
          alt="dog"
        />
      </div>
      {projectList.map((project) => (
        <BoxWithIndex
          key={project.title}
          title={project.title}
          img={project.img}
          desc={project.desc}
          link={project.link}
        />
      ))}
    </ProjectContainer>
  );
};

export default Project;
