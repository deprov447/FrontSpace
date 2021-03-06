import React, { useCallback, useContext, useEffect } from 'react';

import Homepage from './Homepage/Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Categories from './Categories/Categories';
import CategoriesPage from './Categories/CategoriesPage';
import Form from './Categories/Templates/Form/Form';
import NotFound404 from './NotFound404';
import AuthChecker from './Auth/AuthChecker';
import refreshToken from './Auth/refreshToken';
import { UserContext } from './Contexts/UserContext';
import Header from './Header';
import Footer from './Footer';

function App() {
  const setUserContext = useContext(UserContext)[1];

  const verifyUser = useCallback(async () => {
    const token = await refreshToken();
    setUserContext(prev => {
      return { ...prev, token };
    });
    setTimeout(verifyUser, 5 * 60 * 1000);
  }, [setUserContext]);

  const syncLogout = useCallback(event => {
    if (event.key === 'signout') {
      History.push('/');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('storage', syncLogout);
    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, [syncLogout]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return (
    <BrowserRouter>
      <Header />
      <div id="mainbody">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/categories/:category_name"
            element={<CategoriesPage />}
          />
          <Route
            path="/template/:templateId"
            element={
              <AuthChecker>
                <Form />
              </AuthChecker>
            }
          />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
