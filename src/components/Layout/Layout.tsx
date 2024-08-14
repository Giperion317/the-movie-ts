import { Outlet } from "react-router-dom";

import { Header } from "../Header";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Futer</footer>
    </>
  );
};
