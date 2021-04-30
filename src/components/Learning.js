import React from "react";
import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../styles/constant";
import RoundedRectangle from "./RoundedRectangle";
import Title from "./Title";

const LearningContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.pink};
  word-break: keep-all;
  text-align: center;

  > .content-container {
    height: 100vh;
    margin: 0 auto;
    padding: 3em 1em;
    overflow: hidden;
    position: relative;

    > .avatar-talk {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5em 0;

      > .avatar-img {
        width: 4.5em;
      }

      > .avatar-desc {
        font-size: 1.07em;
        letter-spacing: 0.05em;
        font-weight: ${FONT_WEIGHT.regular};
        line-height: 1.3;
        margin-top: 1em;
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

      > .block:nth-child(3) {
        grid-column: 2 / 2;
        grid-row: 2 / 3;
      }
    }

    > .rocket-img {
      position: relative;
      width: 19em;
      top: -11.5em;
      left: -7.5em;
    }
  }
`;

const Learning = () => {
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

  return (
    <LearningContainer id="learning">
      <div className="content-container">
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
        <img
          className="rocket-img"
          src="/assets/images/learning-rocket.png"
          alt="rocket"
        />
      </div>
    </LearningContainer>
  );
};

export default Learning;
