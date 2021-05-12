import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { useTargetOnScreen } from "../hooks/useTargetOnScreen";
import { COLORS, FONT_WEIGHT } from "../styles/constant";
import RoundedRectangle from "./RoundedRectangle";
import Title from "./Title";

const LearningContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.pink};
  word-break: keep-all;
  text-align: center;

  @media ${device.desktop} {
    text-align: left;
  }

  > .content-container {
    height: 100vh;
    margin: 0 auto;
    padding: 3em 1em;
    overflow: hidden;
    position: relative;

    @media ${device.tablet} {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;
      padding: 0 2em;
      padding-top: 3.6em;
    }

    @media ${device.desktop} {
      max-width: 1000px;
      padding-top: 0;
    }

    .content {
      position: relative;

      > .avatar-talk {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5em 0;

        @media ${device.tablet} {
          flex-direction: row;
        }

        > .avatar-img {
          width: 4.5em;
          margin-right: 1em;
        }

        > .avatar-desc {
          font-size: 1.07em;
          letter-spacing: 0.05em;
          font-weight: ${FONT_WEIGHT.regular};
          line-height: 1.3;
          margin-top: 1em;

          @media ${device.tablet} {
            font-size: 1.3em;
            margin-top: 0em;
            text-align: left;
          }
        }
      }

      > .links {
        max-width: 300px;
        margin: 0 auto;
        display: grid;
        justify-items: center;
        column-gap: 13px;
        row-gap: 15px;
        grid-template-columns: 100px 100px;
        justify-content: center;
        text-align: center;

        > .block:nth-child(3) {
          grid-column: 2 / 2;
          grid-row: 2 / 3;

          @media ${device.tablet} {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
          }
        }
      }
    }
    > .rocket-img {
      position: relative;
      width: 19em;
      top: -11.5em;
      left: -7.5em;

      &.visible {
        animation-fill-mode: forwards;
        animation: move-foward 1.8s ease;
      }

      @keyframes move-foward {
        0% {
          transform: rotate(10deg) translate(-80px, -20px);
        }

        50% {
          transform: rotate(5deg) translate(20px, 5px);
        }

        100% {
          transform: rotate(-10deg) translate(0, 10px);
        }
      }

      @media ${device.tablet} {
        width: 25em;
        top: 0;
        left: 0;
        grid-row: 1/2;
        justify-self: center;
      }

      @media ${device.desktop} {
        width: 36.3em;
        top: 0;
        left: 0;
        justify-self: end;
      }
    }
  }
`;

const Learning = () => {
  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  const linkList = [
    {
      title: "블로그",
      url: "https://til.mmyeon.com/",
      backgroundColor: `${COLORS.yellow}`,
    },
    {
      title: "읽은 책 목록",
      url: "https://til.mmyeon.com/",
      backgroundColor: `${COLORS.lightGreen}`,
    },
    {
      title: "WILT",
      url: "https://til.mmyeon.com/",
      backgroundColor: `${COLORS.orange}`,
    },
  ];

  let className = isVisible ? "rocket-img visible" : "rocket-img";

  return (
    <LearningContainer id="learning" ref={containerRef}>
      <div className="content-container">
        <div className="content">
          <Title text="스몰 스텝을 사랑하는 개발자의 학습방법" />
          <div className="avatar-talk">
            <img
              className="avatar-img"
              src="/assets/images/avatar.png"
              alt="avatar"
            />
            <span className="avatar-desc">
              WILT(What I Learnt Today)를 기록하며 매일매일 성장하고 있습니다.
            </span>
          </div>
          <div className="links">
            {linkList.map((item) => (
              <RoundedRectangle
                key={item.title}
                title={item.title}
                url={item.url}
                backgroundColor={item.backgroundColor}
                className="block"
              />
            ))}
          </div>
        </div>
        <img
          className={className}
          src="/assets/images/learning-rocket.png"
          alt="rocket"
        />
      </div>
    </LearningContainer>
  );
};

export default Learning;
