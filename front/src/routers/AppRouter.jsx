
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header'; 
import Home from '@/index';
import Colaboradores from '@/pages/Colaboradores';
import Trades from '@/pages/Trades';
import Nosotros from '@/pages/Nosotros';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

const AppRouter = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
