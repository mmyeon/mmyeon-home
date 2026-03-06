import { useTargetOnScreen } from "../../../hooks/useTargetOnScreen";
import RoundedRectangle from "../../../components/RoundedRectangle";
import Title from "../../../components/Title";
import * as Styled from "./index.styles";
import { COLORS } from "../../../styles/constant";
import { LINKS } from "../../../constants/links";

const Learning = () => {
  const [containerRef, isVisible] = useTargetOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <Styled.LearningContainer
      id="learning"
      ref={containerRef}
      isVisible={isVisible}
    >
      <div className="content-container">
        <div className="content">
          <Title text="스몰 스텝을 사랑하는 개발자의 학습방법" />

          <div className="avatar-talk">
            <img
              className="avatar-img"
              src="/assets/images/home/avatar.png"
              alt="avatar"
            />

            <span className="avatar-desc">
              개발하면서 만난 고민을 글로 기록하고 있습니다.
            </span>
          </div>

          <RoundedRectangle
            key="블로그"
            title="블로그 보러 가기"
            url={LINKS.blog}
            backgroundColor={COLORS.yellow}
          />
        </div>

        <img
          className="rocket-img"
          src="/assets/images/home/learning-rocket.png"
          alt="rocket"
        />
      </div>
    </Styled.LearningContainer>
  );
};

export default Learning;
