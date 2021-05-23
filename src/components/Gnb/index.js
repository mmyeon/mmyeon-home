import React, { useState, useEffect } from "react";
import HambergurBtn from "./HambergurBtn";
import NavBar from "./NavBar";
import { DEVICE_WIDTH_TABLET } from "../../device";

const Gnb = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div>
      {windowWidth >= `${DEVICE_WIDTH_TABLET}` ? (
        <NavBar />
      ) : (
        <>
          {!isNavBarOpen && <HambergurBtn toggleNavBar={toggleNavBar} />}
          {isNavBarOpen && <NavBar toggleNavBar={toggleNavBar} />}
        </>
      )}
    </div>
  );

  function toggleNavBar() {
    setIsNavBarOpen(!isNavBarOpen);
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
};

export default Gnb;
