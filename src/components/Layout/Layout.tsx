import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Loader } from "../Loader";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Futer</footer>
    </>
  );
};
