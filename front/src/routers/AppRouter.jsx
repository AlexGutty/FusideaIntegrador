// src/routers/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePublicPage from '../pages/HomePublicPage';
import HomePage from '../presentation/pages/HomePage';
import UserProfilePage from '../presentation/pages/UserProfilePage';
import AboutUsPage from '../pages/AboutUsPage';
import TradesPage from '../pages/TradesPage';
import Trades from '../presentation/pages/Trades';
import Login from '../auth/pages/Login';
import Register from '../auth/pages/Register';
import PrivateRoute from '../routers/PrivateRoute';
import UserProfileProfile from '../presentation/pages/UserProfileProfile';
import FriendshipManager from '../presentation/pages/FriendshipManager';
import UserDirectory from '../presentation/pages/UserDirectory';
import Templates from '../presentation/pages/Templates';
import SuccessStoriesPage from '../pages/SuccessStoriesPage';
import CoursesPage from '../presentation/pages/CoursesPage';
import MyTrades from '../presentation/pages/MyTrades'; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<HomePublicPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="trades" element={<TradesPage />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          {/* Eliminamos la duplicación de "my-trades" aquí */}

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="perfil" element={<UserProfilePage />} />
            <Route path="templates" element={<Templates />} />
            <Route path="user-directory" element={<UserDirectory />} />
            <Route path="friendship-manager" element={<FriendshipManager />} />
            <Route path="my-profile" element={<UserProfileProfile />} />
            <Route path="trade" element={<Trades />} />
            <Route path="my-trades" element={<MyTrades />} /> {/* Asegúrate de que esta ruta sea la correcta */}
            <Route path="courses" element={<CoursesPage />} />
            {/* Eliminamos el Route index dentro de ProtectedRoute */}
          </Route>

          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<div className="p-4 text-center">404 - Página No Encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
