import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import './index.css';
import '@/assets/styles/global.css';

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};
export default App;