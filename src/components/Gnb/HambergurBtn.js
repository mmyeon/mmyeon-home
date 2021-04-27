import React from "react";
import styled from "styled-components";

const HambergurBtnContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
`;

const HambergurBtn = ({ openNavBar }) => {
  return (
    <HambergurBtnContainer>
      <button onClick={openNavBar}>내비게이션아 열려라</button>
    </HambergurBtnContainer>
  );
};

export default HambergurBtn;
