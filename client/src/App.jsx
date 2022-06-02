import React from 'react';

import Homepage from './Homepage/Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Categories from './Categories/Categories';
import CategoriesPage from './Categories/CategoriesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category_name" element={<CategoriesPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
