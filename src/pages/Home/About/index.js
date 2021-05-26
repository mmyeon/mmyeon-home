import React from "react";
import EmailButton from "../../../components/Buttons/MailToButton";
import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import * as Styled from "./index.styles";

const About = () => {
  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  return (
    <Styled.AboutContainer id="home" ref={containerRef} isVisible={isVisible}>
      <div className="content-container">
        <div className="text-container">
          <div className="title-container">
            {/* TODO: 시맨틱태그 합리화 */}
            <h1 className="name">Miyeon Lim,</h1>
            <h2>I am</h2>
            <h1 className="job">Frontend Developer</h1>
          </div>

          <p className="desc">
            <span className="highlight">요가</span>와{" "}
            <span className="highlight">개</span>를 사랑하고{" "}
            <span className="highlight">지속적인 성장</span>을 추구하는 개발자
            <b> 임미연</b> 입니다.
          </p>

          <EmailButton title="hire me" />
        </div>

        <img className="blob" src="/assets/images/blob.png" alt="blob" />

        <img
          className="walking-girl"
          src="/assets/images/landing-main.png"
          alt="walking girl"
        />

        <img
          className="downward-arrow"
          src="/assets/images/arrow-icon.png"
          alt="downward arrow"
        />
      </div>
    </Styled.AboutContainer>
  );
};

export default About;
