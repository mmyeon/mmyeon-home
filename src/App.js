import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";
import Learning from "./routes/Learning";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Gnb from "./components/Gnb";

function App() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Gnb
        openNavBar={openNavBar}
        closeNavBar={closeNavBar}
        isNavBarOpen={isNavBarOpen}
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
}

export default App;
