import React from "react";
import styled, { css } from "styled-components";
import { device } from "../../device";
import { COLORS } from "../../styles/constant";
import BoxWithIndex from "../../components/BoxWithIndex";
import Title from "../../components/Title";
import { useTargetOnScreen } from "../../hooks/useTargetOnScreen";

const ProjectContainer = styled.div`
  background: ${COLORS.lightBlue};
  /* TODO:매번 컨테이너에 반복적으로 넣어주는데 개선하기: top에 공간주기 위에서 넣는 것  */
  width: 100%;
  height: auto;
  position: relative;

  > .content-container {
    display: flex;
    flex-direction: column;
    padding: 0 2em;
    padding-bottom: 3em;
    position: relative;

    @media ${device.tablet} {
      flex-direction: row;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      height: auto;
      padding-top: 3em;
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

      > h1 {
        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: reveal 1s forwards 0.25s;
            `;
        }}
      }

      > .dog-img {
        width: 45%;
        max-width: 28.1em;

        ${(props) => {
          if (props.isVisible)
            return css`
              opacity: 0;
              animation: reveal 1s forwards 0.5s;
            `;
        }}

        @media ${device.tablet} {
          margin-top: 1.5em;
        }
      }
    }

    > .project-desc {
      ${(props) => {
        if (props.isVisible)
          return css`
            opacity: 0;
            animation: reveal 1s forwards 0.75s;
          `;
      }}

      @media ${device.tablet} {
        height: auto;
        margin-top: 0;
        padding-top: 10em;
        padding-left: 2em;
      }
    }
  }

  @keyframes reveal {
    0% {
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
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
    <ProjectContainer id="project" ref={containerRef} isVisible={isVisible}>
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
    </ProjectContainer>
  );
};

export default Project;
