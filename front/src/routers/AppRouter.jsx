import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePublicPage from '../pages/HomePublicPage';
import HomePage from '../presentation/pages/HomePage';
import UserProfilePage from '../presentation/pages/UserProfilePage';
import AboutUs from '../pages/AboutUs';
import Trades from '../presentation/pages/Trades';
import Login from '../auth/pages/Login';
import Register from '../auth/pages/Register';
import PrivateRoute from '../routers/PrivateRoute';
import UserProfileProfile from '../presentation/pages/UserProfileProfile';
import FriendshipManager from '../presentation/pages/FriendshipManager';
import UserDirectory from '../presentation/pages/userDirectory';
import Templates from '../presentation/pages/Templates';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<HomePublicPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
            <Route path="perfil" element={<UserProfilePage />} />
            <Route path="templates" element={<Templates />} />
            <Route path="user-directory" element={<UserDirectory />} />
            <Route path="friendship-manager" element={<FriendshipManager />} />
            <Route path="my-profile" element={<UserProfileProfile />} />
            <Route path="my-trades" element={<Trades />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

