import React from "react";
import CardWithIndex from "../../../components/CardWithIndex";
import Title from "../../../components/Title";
import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import * as Styled from "./index.styles";

const Project = () => {
  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  const PROJECT_LIST = [
    {
      title: "DogIn",
      img: "/assets/images/home/project-dog.png",
      desc: "강아지를 입양하기 전 고려해야 할 부분을 알려주는 프로젝트입니다.",
      link: "https://dogin.mmyeon.com/",
    },
    {
      title: "mmyeon.com",
      img: "/og-img.png",
      desc: "개인 웹사이트 제작",
      link: "https://mmyeon.com/",
    },
  ];

  return (
    <Styled.ProjectContainer
      id="project"
      ref={containerRef}
      isVisible={isVisible}
    >
      <div className="content-container">
        <div className="title-container">
          <Title
            text={
              <>
                요가와 개를 좋아하는 <br />
                개발자는 이런 걸 만듭니다.
              </>
            }
          />

          <img
            className="dog-img"
            src="/assets/images/home/project-dog.png"
            alt="dog"
          />
        </div>

        <div className="project-desc">
          {PROJECT_LIST.map((project) => (
            <CardWithIndex
              key={project.title}
              title={project.title}
              img={project.img}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Styled.ProjectContainer>
  );
};

export default Project;
