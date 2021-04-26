import React, { useState } from "react";
import HambergurBtn from "./HambergurBtn";
import NavigationBar from "./NavigationBar";

const Gnb = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <div>
      <HambergurBtn openNavBar={openNavBar} />
      {isNavBarOpen && <NavigationBar closeNavBar={closeNavBar} />}
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
