import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

const App:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path='search' element={<SearchPage/>}/>
        </Route>
   </Routes>
    </>
  );
}

export default App;
