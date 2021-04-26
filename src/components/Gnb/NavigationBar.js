import React from "react";
import styled from "styled-components";

const NavigationBar = ({ closeNavBar }) => {
  return (
    <div>
      열렷다<button onClick={closeNavBar}>X</button>
    </div>
  );
};

export default NavigationBar;
