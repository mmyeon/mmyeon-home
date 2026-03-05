import styled from "styled-components";
import { device } from "../device";
import { COLORS, FONT_WEIGHT } from "../styles/constant";

interface RoundedRectangleProps {
  title: string;
  url: string;
  backgroundColor: string;
}

type ContainerProps = Pick<RoundedRectangleProps, "backgroundColor">;

const Container = styled.a`
  width: fit-content;
  background: ${(props: ContainerProps) => props.backgroundColor};
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  border: 2px solid ${COLORS.darkGray};
  z-index: 1;
  font-weight: ${FONT_WEIGHT.semiBold};
  font-size: 1.12em;
  line-height: 1.2;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  @media ${device.desktop} {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const RoundedRectangle = ({
  title,
  url,
  backgroundColor,
}: RoundedRectangleProps) => {
  return (
    <Container
      role="button"
      href={url}
      target="_blank"
      backgroundColor={backgroundColor}
    >
      {title}
    </Container>
  );
};

export default RoundedRectangle;
