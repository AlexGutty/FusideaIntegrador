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
import UserDirectory from '../presentation/pages/userDirectory';
import Templates from '../presentation/pages/Templates';
import SuccessStoriesPage from '../pages/SuccessStoriesPage';
import CoursesPage from '../presentation/pages/CoursesPage';
import MyTrades  from '../presentation/pages/MyTrades'; 
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

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path="my-trades" element={<MyTrades />} />
                      <Route path="perfil" element={<UserProfilePage />} />
            <Route path="templates" element={<Templates />} />
            <Route path="user-directory" element={<UserDirectory />} />
            <Route path="friendship-manager" element={<FriendshipManager />} />
            <Route path="my-profile" element={<UserProfileProfile />} />
            <Route path="my-trades" element={<Trades />} />
            <Route path="courses" element={<CoursesPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

