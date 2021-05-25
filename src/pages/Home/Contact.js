import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/constant";
import Title from "../../components/Title";
import OutlineButton from "../../components/Buttons/OutlineButton";
import { device } from "../../device";

const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: repeating-linear-gradient(
    to right,
    ${COLORS.pastelBlue},
    ${COLORS.pastelBlue} 20px,
    rgba(25, 71, 229, 0.46) 20px,
    rgba(25, 71, 229, 0.46) 40px
  );

  box-sizing: border-box;
  padding: 0 2em;
  padding-top: 2em;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3em;
    background: repeating-linear-gradient(
      to right,
      ${COLORS.pastelBlue},
      ${COLORS.pastelBlue} 6em,
      rgba(25, 71, 229, 0.46) 6em,
      rgba(25, 71, 229, 0.46) 7em
    );
  }

  > .content {
    max-width: 100%;
    margin: 0 auto;

    @media ${device.tablet} {
      margin: 0;
    }

    > h1 {
      opacity: 0;
      animation: reveal 1s forwards 0.25s;
    }

    > .btn-container {
      width: 100%;
      margin-top: 0.5em;

      @media ${device.tablet} {
        max-width: 80%;
        display: block;
        margin: 1em auto;
      }

      > li:nth-child(1) {
        opacity: 0;
        animation: reveal 1s forwards 0.5s;
      }
      > li:nth-child(2) {
        opacity: 0;
        animation: reveal 1s forwards 0.75s;
      }
      > li:nth-child(3) {
        opacity: 0;
        animation: reveal 1s forwards 1s;
      }
    }
  }

  > img.jumping {
    width: 14em;
    display: block;
    margin: 0 auto;
    margin-top: 0.4em;
    animation: shake 1s linear 1.25s forwards;
    transition: 0.3s;
    opacity: 0;

    @media ${device.tablet} {
      width: 20em;
      margin: 0;
      margin-left: 4em;
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

  @keyframes shake {
    0%,
    100% {
      opacity: 1;
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-0.4em);
    }
    20%,
    40%,
    60% {
      transform: translateY(0.4em);
    }
    80% {
      transform: translateY(0.3em);
    }
    90% {
      transform: translateY(-0.3em);
    }
  }
`;

const Contact = () => {
  const contactList = [
    { title: "github", link: "https://github.com/mmyeon" },

    {
      title: "resume",
      link: "https://www.notion.so/resume-1e7bd77786b34a6da0b3f0dfa2c16dcf",
    },
    {
      title: "send email",
      link: "mailto:mindfulyeon@gmail.com?subject=당신과 함께 일해보고 싶어요.",
    },
  ];

  return (
    <ContactContainer id="contact">
      <div className="content">
        <Title text="제 발자국을 공유합니다" />

        <ul className="btn-container">
          {contactList.map((contact) => (
            <li key={contact.title}>
              <OutlineButton title={contact.title} link={contact.link} />
            </li>
          ))}
        </ul>
      </div>
      <img
        src="/assets/images/contact-jump.png"
        alt="jumping person"
        className="jumping"
      />
    </ContactContainer>
  );
};

export default Contact;
