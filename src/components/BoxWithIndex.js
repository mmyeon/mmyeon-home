import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { COLORS, FONT_WEIGHT } from "../styles/constant";
import Button from "./Button";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 1.5em;

  @media ${device.tablet} {
    max-width: 18em;
  }

  > .content {
    background: white;
    padding: 1em 1.5em;
    border-radius: 0 0 0.6em 0.6em;
    display: flex;
    flex-direction: column;
    border: 2px solid ${COLORS.darkGray};
    border-top: 3px solid ${COLORS.darkGray};
    width: 100%;

    > .project-desc {
      font-size: 1.07em;
      line-height: 1.3;

      @media ${device.tablet} {
        font-size: 1.2em;
        line-height: 1.2;
      }
    }

    > * + * {
      margin-top: 1em;
    }

    > a > button {
      width: 100%;
      font-size: 1em;
      transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      transition: letter-spacing 0.3s;

      &:hover {
        letter-spacing: 6px;
      }
    }
  }
`;

const Index = styled.span`
  background: ${COLORS.yellow};
  font-weight: ${FONT_WEIGHT.extraBold};
  font-size: 1.3em;
  padding: 0.5em 0.9em;
  border-radius: 0.6em 0.6em 0 0;
  border: 2px solid black;
  border-bottom: none;
`;

const BoxWithIndex = ({ title, img, desc, link }) => {
  return (
    <Container>
      <Index>{title}</Index>
      <div className="content">
        <img className="project-thumbnail" src={img} alt="thumbnail" />
        <span className="project-desc">{desc}</span>
        <a href={link} target="_blank" rel="noreferrer">
          <Button title="더보기" backgroundColor={`${COLORS.darkGray}`} />
        </a>
      </div>
    </Container>
  );
};

export default BoxWithIndex;
