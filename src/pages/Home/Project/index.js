import React from "react";
import CardWithIndex from "../../../components/CardWithIndex";
import Title from "../../../components/Title";
import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import * as Styled from "./index.styles";

const Project = () => {
  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const PROJECT_LIST = [
    {
      title: "DogIn",
      img: "/assets/images/home/dogin.png",
      desc: "반려견 입양하기 전, 보호자에게 꼭 필요한 체크리스트",
      links: {
        website: "https://dogin.mmyeon.com/",
        github: "https://github.com/mmyeon/dogin",
      },
    },
    {
      title: "mmyeon.com",
      img: "/og-img.png",
      desc: "애니메이션이 들어간 개인 웹사이트",
      links: {
        website: "https://www.mmyeon.com/",
        github: "https://github.com/mmyeon/mmyeon-home",
      },
    },
    {
      title: "Yogalim",
      img: "/assets/images/home/yogalim.png",
      desc: "신체 통증을 줄여주는 요가를 안내해주는 서비스",
      links: {
        website: "https://yogalim.mmyeon.com/",
        github: "https://github.com/mmyeon/yogalim",
      },
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
              links={project.links}
            />
          ))}
        </div>
      </div>
    </Styled.ProjectContainer>
  );
};

export default Project;
