import { MainNavigationBox, MainNavigationItem } from "./NavigationStyled";

export const Navigation: React.FC = () => {
  return (
    <nav>
      <MainNavigationBox>
        <MainNavigationItem name="Home" to="/" />
        <MainNavigationItem name="Search" to="/search" />
      </MainNavigationBox>
    </nav>
  );
};
