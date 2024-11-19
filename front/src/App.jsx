import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Trades from './pages/Trades';
import Login from './auth/pages/Login';
import PasswordRecovery from './auth/pages/PasswordRecovery';
import PasswordReset from './auth/pages/PasswordReset';
import Register from './auth/pages/Register';
import HomePage from './presentation/pages/HomePage';
import UserProfilePage from './presentation/pages/UserProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import './index.css';

const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error('Error in application:', error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ErrorBoundary>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/trades" element={<Trades />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/password-recovery" element={<PasswordRecovery />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/user-profile" element={<UserProfilePage />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
            <Footer />
          </Router>
        </ErrorBoundary>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default App;
