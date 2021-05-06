import React from "react";
import styled from "styled-components";
import EmailButton from "../components/EmailButton";
import { COLORS, FONT_WEIGHT } from "../styles/constant";
import { device } from "../device";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${COLORS.yellow};
  position: relative;
  overflow: hidden;

  > .content-container {
    display: flex;
    align-items: center;
    max-width: 250px;
    margin: 0 auto;

    @media ${device.tablet} {
      max-width: 600px;
      margin: 0 auto;
    }

    @media ${device.desktop} {
      max-width: 900px;
      margin: 0 auto;
    }

    > .text-container {
      position: absolute;
      z-index: 10;
      top: 50%;
      transform: translate(0, -50%);
      width: 13em;

      @media ${device.tablet} {
        width: 20em;
      }

      > .title-container {
        font-weight: 200;
        font-size: 1em;
        line-height: 1.4;
        margin-bottom: 2em;

        > .name {
          font-size: 2.06em;
          font-weight: ${FONT_WEIGHT.bold};

          @media ${device.tablet} {
            font-size: 2.4em;
          }
        }

        > h2 {
          font-size: 1.6em;
          font-weight: ${FONT_WEIGHT.semiBold};

          @media ${device.tablet} {
            font-size: 2.2em;
          }
        }

        > .job {
          font-size: 2.5em;
          font-weight: ${FONT_WEIGHT.extraBold};
          line-height: 1.1;

          @media ${device.tablet} {
            font-size: 3.3em;
            width: 200%;
            word-break: break-all;
          }
        }
      }

      > .desc {
        font-size: 1.06em;
        line-height: 1.6;
        font-weight: ${FONT_WEIGHT.regular};
        word-break: keep-all;
        letter-spacing: 0.8px;

        @media ${device.tablet} {
          font-size: 1.5em;
          word-break: break-all;
          width: 156%;
        }

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

        .bold {
          font-weight: 700;
          letter-spacing: 0.2em;
        }
      }
    }

    > .blob {
      position: relative;
      width: 17em;
      left: -1.5em;
      top: 6.5em;

      @media ${device.tablet} {
        width: 24em;
        left: -5em;
        top: 10em;
      }

      @media ${device.desktop} {
        width: 33em;
        left: -2em;
        top: -7em;
      }
    }

    > .walking-girl {
      position: relative;
      width: 16em;
      padding: 2em 0;
      right: 9.5em;
      transform: translate(0, 6%);

      @media ${device.tablet} {
        width: 30em;
        right: 10em;
      }

      @media ${device.desktop} {
        width: 42em;
        right: 10em;
      }
    }

    > .downward-arrow {
      width: 3em;
      height: 3em;
      position: absolute;
      bottom: 1em;
      left: 50%;
      animation: move 2s infinite;

      @keyframes move {
        0% {
          transform: translate(-50%, -4em);
        }
        50% {
          transform: translate(-50%, -2em);
        }
        100% {
          transform: translate(-50%, -4em);
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <Container id="home">
      <div className="content-container">
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
            <span className="bold"> 임미연</span>입니다.
          </p>
          <EmailButton title="hire me" />
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
      </div>
    </Container>
  );
};

export default Home;
