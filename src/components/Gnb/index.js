import React from "react";
import HambergurBtn from "./HambergurBtn";
import NavBar from "./NavBar";

const Gnb = ({ isNavBarOpen, openNavBar, closeNavBar }) => {
  return (
    <div>
      {!isNavBarOpen && <HambergurBtn openNavBar={openNavBar} />}
      {isNavBarOpen && <NavBar closeNavBar={closeNavBar} />}
    </div>
  );
};

export default Gnb;
