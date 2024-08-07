import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { MovieFullInfoPage } from '../pages/MovieFullInfoPage';

const App:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='search' element={<SearchPage />} />
          <Route path="search/:movieId" element={<MovieFullInfoPage/>} />
        </Route>
   </Routes>
    </>
  );
}

export default App;
