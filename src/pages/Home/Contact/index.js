import React from "react";
import Title from "../../../components/Title";
import OutlineButton from "../../../components/Buttons/OutlineButton";
import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import * as Styled from "./index.styles";

const Contact = () => {
  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

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
    <Styled.ContactContainer
      id="contact"
      ref={containerRef}
      isVisible={isVisible}
    >
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
    </Styled.ContactContainer>
  );
};

export default Contact;
