import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesCarousel from '@/components/CategoriesCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';
import './index.css';
import '@/assets/styles/global.css';

const Main = () => {
  return (
    <div>
      <Header />
      <main className="bg-white">
        <HeroSection />
        <CategoriesCarousel />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);
