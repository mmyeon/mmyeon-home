import Title from "../../../components/Title";
import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import * as Styled from "./index.styles";
import Button from "../../../components/Button";
import { COLORS } from "../../../styles/constant";

const Contact = () => {
  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const CONTACT_LIST = [
    { title: "github", link: "https://github.com/mmyeon" },

    {
      title: "resume",
      link: "https://ritzy-phalange-090.notion.site/48592773e6cf4d3396d7ce80fa3bf84a",
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
      <div className="content-wrapper">
        <div className="content">
          <Title text="제 발자국을 공유합니다" />

          <ul className="btn-container">
            {CONTACT_LIST.map((contact) => (
              <li key={contact.title}>
                <Button
                  type="withOutline"
                  title={contact.title}
                  href={contact.link}
                  color={`${COLORS.darkBlue}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <img
          src="/assets/images/home/contact-jump.png"
          alt="jumping person"
          className="jumping"
        />
      </div>
    </Styled.ContactContainer>
  );
};

export default Contact;
