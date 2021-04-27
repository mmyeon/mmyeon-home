import React from "react";
import styled from "styled-components";
import HireMeButton from "../components/HireMeButton";
import { COLORS, FONT_WEIGHT } from "../styles/constant";

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
        font-weight: ${FONT_WEIGHT.bold};
      }

      > h2 {
        font-size: 1.6em;
        font-weight: ${FONT_WEIGHT.semiBold};
      }

      > .job {
        font-size: 2.5em;
        font-weight: ${FONT_WEIGHT.extraBold};
        line-height: 1.1;
      }
    }

    > .desc {
      font-size: 1.06em;
      line-height: 1.6;
      font-weight: ${FONT_WEIGHT.regular};
      word-break: keep-all;
      letter-spacing: 0.8px;

      .highlight {
        background: linear-gradient(180deg, transparent 57%, #29fea6 47%);
        padding: 0 0.2em;
        background-size: 150% 150%;
        animation: gradient 2s cubic-bezier(0.4, 0, 1, 1);
        animation-fill-mode: forwards;

        @keyframes gradient {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 50% 50%;
          }
          100% {
            background-position: 50% 50%;
          }
        }
      }
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
    <Container id="home">
      <div className="text-container">
        <div className="title-container">
          <h1 className="name">Miyeon Lim,</h1>
          <h2>I am</h2>
          <h1 className="job">Frontend Developer</h1>
        </div>
        <p className="desc">
          <span className="highlight">요가</span>와{" "}
          <span className="highlight">개</span>를 사랑하고{" "}
          <span className="highlight">지속적인 성장</span>을 추구하는 개발자
          <strong> 임미연</strong>입니다.
        </p>
        <HireMeButton />
      </div>
      <img
        className="blob"
        src="/assets/images/blob.png"
        alt="blob
      "
      />
      <img
        className="walking-girl"
        src="/assets/images/landing-main.png"
        alt="walking girl
      "
      />
      <img
        className="downward-arrow"
        src="/assets/images/arrow-icon.png"
        alt="downward arrow
      "
      />
    </Container>
  );
};

export default Home;
