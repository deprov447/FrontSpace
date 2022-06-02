import React from 'react';

import Homepage from './Homepage/Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Categories from './Categories/Categories';
import CategoriesPage from './Categories/CategoriesPage';
import Form from './Categories/Templates/Form/Form';
import NotFound404 from './NotFound404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category_name" element={<CategoriesPage />} />
        <Route path="/template/:templateId" element={<Form />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
