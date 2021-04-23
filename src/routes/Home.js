import React from "react";
import styled from "styled-components";
import { COLORS, FONTWEIGHT } from "../styles/constant";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${COLORS.yellow};
  position: relative;
  overflow: hidden;

  > .text-container {
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translate(0, -50%);
    padding-left: 1.3em;
    width: 12.6em;

    > .title-container {
      font-weight: 200;
      font-size: 1em;
      line-height: 1.4;
      margin-bottom: 2em;

      > .name {
        font-size: 2.06em;
        font-weight: ${FONTWEIGHT.bold};
      }

      > h2 {
        font-size: 1.6em;
        font-weight: ${FONTWEIGHT.semiBold};
      }

      > .job {
        font-size: 2.5em;
        font-weight: ${FONTWEIGHT.extraBold};
        line-height: 1.1;
      }
    }

    > .desc {
      font-size: 1.06em;
      line-height: 1.8;
      font-weight: ${FONTWEIGHT.regular};
      word-break: keep-all;
      letter-spacing
    }
  }

  > .blob {
    position: absolute;
    width: 17em;
    left: -1.5em;
    top: 16em;
  }

  > .walking-girl {
    position: absolute;
    width: 16em;
    padding: 2em 0;
    right: -2em;
    bottom: 50%;
    transform: translate(0, 50%);
  }

  > .downward-arrow {
    width: 3em;
    height: 3em;
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const Home = () => {
  return (
    <Container>
      <div className="text-container">
        <div className="title-container">
          <h1 className="name">Miyeon Lim,</h1>
          <h2>I am</h2>
          <h1 className="job">Frontend Developer</h1>
        </div>
        <p className="desc">
          요가와 개를 사랑하고 지속적인 성장을 추구하는 개발자 임미연입니다.
        </p>
      </div>
      <img
        className="blob"
        src="/assets/blob.png"
        alt="blob
      "
      />
      <img
        className="walking-girl"
        src="/assets/landing-main.png"
        alt="walking girl
      "
      />
      <img
        className="downward-arrow"
        src="/assets/arrow-icon.png"
        alt="downward arrow
      "
      />
    </Container>
  );
};

export default Home;
