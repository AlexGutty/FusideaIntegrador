import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../presentation/pages/HomePage';
import UserProfilePage from '../presentation/pages/UserProfilePage';
import AboutUs from '../pages/AboutUs';
import Trades from '../pages/Trades';
import Login from '../auth/pages/Login';
import Register from '../auth/pages/Register';
import PrivateRoute from '../routers/PrivateRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<HomePage />} />
          <Route path="trades" element={<Trades />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="perfil" element={<UserProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
