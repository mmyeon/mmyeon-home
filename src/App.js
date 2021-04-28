import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";
import Learning from "./components/Learning";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Gnb from "./components/Gnb";

function App() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    setIsNavBarOpen(true);

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

      {isNavBarOpen === false && (
        <>
          <Learning />
          <Project />
          <Contact />
        </>
      )}
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
