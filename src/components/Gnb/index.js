import React, { useState } from "react";
import HambergurBtn from "./HambergurBtn";
import NavBar from "./NavBar";

const Gnb = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <div>
      <HambergurBtn openNavBar={openNavBar} />
      {isNavBarOpen && <NavBar closeNavBar={closeNavBar} />}
    </div>
  );

  function openNavBar() {
    setIsNavBarOpen(true);
  }

  function closeNavBar() {
    setIsNavBarOpen(false);
  }
};

export default Gnb;
