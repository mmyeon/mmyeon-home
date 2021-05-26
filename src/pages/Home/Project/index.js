import React from "react";
import BoxWithIndex from "../../../components/BoxWithIndex";
import Title from "../../../components/Title";
import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import * as Styled from "./index.styles";

const Project = () => {
  const projectList = [
    {
      title: "DogIn",
      img: "/assets/images/project-dog.png",
      desc: "강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.",
      link: "https://dogin.mmyeon.com/",
    },
    {
      title: "YOGA",
      img: "/assets/images/project-dog.png",
      desc: "강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.",
      link: "https://dogin.mmyeon.com/",
    },
  ];

  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

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
            src="/assets/images/project-dog.png"
            alt="dog"
          />
        </div>
        <div className="project-desc">
          {projectList.map((project) => (
            <BoxWithIndex
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
