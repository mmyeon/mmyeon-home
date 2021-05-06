import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { COLORS } from "../styles/constant";
import BoxWithIndex from "./BoxWithIndex";
import Title from "./Title";

const ProjectContainer = styled.div`
  background: ${COLORS.lightBlue};
  /* TODO:매번 컨테이너에 반복적으로 넣어주는데 개선하기: top에 공간주기 위에서 넣는 것  */
  width: 100%;
  height: auto;
  position: relative;

  > .content-container {
    display: flex;
    flex-direction: column;
    padding: 3em 2em;
    position: relative;

    @media ${device.tablet} {
      flex-direction: row;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      height: auto;
    }

    > .title-container {
      display: flex;
      align-items: flex-end;
      flex-direction: row;
      justify-content: center;
      margin-top: 3em;

      @media ${device.tablet} {
        align-items: center;
        flex-direction: column;
        max-height: 100vh;
        margin-top: 0;
        position: sticky;
        top: 3.62em;
        bottom: 0;
      }

      > .dog-img {
        width: 45%;
        max-width: 28.1em;

        @media ${device.tablet} {
          margin-top: 1.5em;
        }
      }
    }

    > .project-desc {
      @media ${device.tablet} {
        height: auto;
        margin-top: 0;
        padding-top: 10em;
        padding-left: 2em;
      }
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
      title: "YOGA",
      img: "/assets/images/project-dog.png",
      desc:
        "강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.강아지 입양을 신중하게 하자는 의도에서 만든 프로젝트입니다.",
      link: "https://dogin.mmyeon.com/",
    },
  ];

  return (
    <ProjectContainer id="project">
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
          {/* <Title
            text={`요가와 개를 좋아하는 
            개발자는 이런 걸 만듭니다.`}
          /> */}
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
    </ProjectContainer>
  );
};

export default Project;
