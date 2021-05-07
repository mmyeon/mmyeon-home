import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constant";
import Title from "./Title";
import OutlineButton from "./Buttons/OutlineButton";

const ContactContainer = styled.div`
  height: 100vh;
  background: ${COLORS.pastelBlue};
  box-sizing: border-box;
  padding: 0 2em;
  padding-top: 2em;

  > .content {
    width: 100%;
    margin: 0 auto;

    > .btn-containter {
    }

    > img.jumping {
      width: 14em;
      display: block;
      margin: 0 auto;
      margin-top: 0.4em;
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
            <li>
              <OutlineButton title={contact.title} link={contact.link} />
            </li>
          ))}
        </ul>

        <img
          src="/assets/images/contact-jump.png"
          alt="jumping person"
          className="jumping"
        />
      </div>
    </ContactContainer>
  );
};

export default Contact;
