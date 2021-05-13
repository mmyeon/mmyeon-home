import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";
import Learning from "./components/Learning";
import Project from "./pages/Project";
import Contact from "./components/Contact";
import Gnb from "./components/Gnb";

function App() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    windowWidth >= 768 && setIsNavBarOpen(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Gnb
        openNavBar={openNavBar}
        closeNavBar={closeNavBar}
        isNavBarOpen={isNavBarOpen}
        windowInnerWidth={windowWidth}
      />
      <Router />

      {/* TODO: 모바일에서 navBar 펼쳐졌을 때 뒤에 스크롤 되는 거 개선하기  */}
      <Learning />
      <Project />
      <Contact />
    </>
  );

  function openNavBar() {
    setIsNavBarOpen(true);
  }

  function closeNavBar() {
    setIsNavBarOpen(false);
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
}

export default App;
