import React from "react";
import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import RoundedRectangle from "../../../components/RoundedRectangle";
import Title from "../../../components/Title";
import * as Styled from "./index.styles";
import { COLORS } from "../../../styles/constant";

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

  return (
    <Styled.LearningContainer
      id="learning"
      ref={containerRef}
      isVisible={isVisible}
    >
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
          className="rocket-img"
          src="/assets/images/learning-rocket.png"
          alt="rocket"
        />
      </div>
    </Styled.LearningContainer>
  );
};

export default Learning;