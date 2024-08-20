import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));

const SearchPage = lazy(() => import("../pages/SearchPage"));

const MovieFullInfoPage = lazy(() => import("../pages/MovieFullInfoPage"));

const CastPage = lazy(() => import("../pages/CastPage"));

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route
            path="search/movie/:slug/:movieId"
            element={<MovieFullInfoPage />}
          >
            <Route path="cast" element={<CastPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
