import * as Styled from "./index.styles";

const NavBar = ({ toggleNavBar }: { toggleNavBar?: () => void }) => {
  const NAV_BAR_LIST = ["home", "learning", "project", "contact"];

  return (
    <Styled.NavBarContainer>
      <ul className="menu-dropdown">
        {NAV_BAR_LIST.map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={toggleNavBar}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </Styled.NavBarContainer>
  );
};

export default NavBar;
