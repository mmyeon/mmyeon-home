import React, { useState, useEffect } from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavBar from "./NavBar";
import { DEVICE_WIDTH_TABLET } from "../../device";

const Gnb = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // 브라우저 창의 크기가 바뀌면 windowWidth 스테이트 변경하는 코드
  // 윈도우 창 크기에 따라 다른 컴포넌트 렌더링함
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <header>
      {windowWidth >= `${DEVICE_WIDTH_TABLET}` ? (
        <NavBar />
      ) : (
        <>
          <HamburgerBtn
            toggleNavBar={toggleNavBar}
            isNavBarOpen={isNavBarOpen}
          />
          {isNavBarOpen && <NavBar toggleNavBar={toggleNavBar} />}
        </>
      )}
    </header>
  );

  function toggleNavBar() {
    setIsNavBarOpen(!isNavBarOpen);
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
};

export default Gnb;
