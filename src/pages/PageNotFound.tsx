import styled from "styled-components";
import { FONT_WEIGHT } from "../styles/constant";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: ${FONT_WEIGHT.extraBold};
  text-align: center;
  line-height: 1.3;
`;

const PageNotFound = () => {
  return (
    <Container>
      <p>
        😥
        <br />
        Page is not found.
      </p>
    </Container>
  );
};

export default PageNotFound;
