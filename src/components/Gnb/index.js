import React from "react";
import HambergurBtn from "./HambergurBtn";
import NavBar from "./NavBar";
import { DEVICE_WIDTH_TABLET } from "../../device";

const Gnb = ({ isNavBarOpen, openNavBar, closeNavBar, windowInnerWidth }) => {
  return (
    <div>
      {windowInnerWidth >= `${DEVICE_WIDTH_TABLET}` ? (
        <NavBar />
      ) : (
        <>
          {" "}
          {!isNavBarOpen && <HambergurBtn openNavBar={openNavBar} />}
          {isNavBarOpen && <NavBar closeNavBar={closeNavBar} />}
        </>
      )}
    </div>
  );
};

export default Gnb;
