import * as Styled from "./index.styles";

export interface HamburgerBtnProps {
  toggleNavBar: () => void;
  isNavBarOpen: boolean;
}

const HamburgerBtn = ({ toggleNavBar, isNavBarOpen }: HamburgerBtnProps) => {
  return (
    <Styled.HamburgerBtnContainer isNavBarOpen={isNavBarOpen}>
      <div className="menu-btn-burger" onClick={toggleNavBar}></div>
    </Styled.HamburgerBtnContainer>
  );
};

export default HamburgerBtn;
