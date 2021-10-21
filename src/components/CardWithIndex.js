import React from "react";
import styled from "styled-components";
import { device } from "../device";
import { COLORS, FONT_WEIGHT } from "../styles/constant";
import Button from "./Button";

const Container = styled.section`
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
    padding: 1em;
    border-radius: 0 0 0.6em 0.6em;
    display: flex;
    flex-direction: column;
    border: 2px solid ${COLORS.darkGray};
    border-top: 3px solid ${COLORS.darkGray};
    width: 100%;

    > .project-thumbnail {
      width: 100%;
      height: 100%;
    }

    > .project-desc {
      font-size: 1.07em;
      line-height: 1.3;

      @media ${device.tablet} {
        font-size: 1.2em;
        line-height: 1.2;
      }
    }

    > * + * {
      margin-top: 0.7em;
    }

    > .button-container {
      display: flex;
      width: 100%;
      justify-content: space-around;
      flex-direction: row;

      > a {
        font-size: 1em;
      }
    }
  }
`;

const Index = styled.h2`
  background: ${COLORS.yellow};
  font-weight: ${FONT_WEIGHT.extraBold};
  font-size: 1.3em;
  padding: 0.5em 0.9em;
  border-radius: 0.6em 0.6em 0 0;
  border: 2px solid black;
  border-bottom: none;
`;

const CardWithIndex = ({ title, img, desc, links: { website, github } }) => {
  return (
    <Container>
      <Index>{title}</Index>
      <div className="content">
        <img className="project-thumbnail" src={img} alt="thumbnail" />
        <span className="project-desc">{desc}</span>

        <div className="button-container">
          <Button
            className="github-button"
            type="withOutline"
            title={<i className="fab fa-github fa-lg"></i>}
            href={github}
            color={`${COLORS.darkGray}`}
          />

          <Button
            className="wesite-button"
            title="웹사이트"
            href={website}
            backgroundColor={`${COLORS.darkGray}`}
          />
        </div>
      </div>
    </Container>
  );
};

export default CardWithIndex;
