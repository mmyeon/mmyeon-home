import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div``;

const NavBar = ({ closeNavBar }) => {
  return (
    <NavBarContainer>
      열렷다<button onClick={closeNavBar}>X</button>
    </NavBarContainer>
  );
};

export default NavBar;
