import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs'; 
import Footer from '@/components/Footer';
import './index.css';
import '@/assets/styles/global.css';

const Main = () => {
  return (
    <div>
      <Header />
      <main className='bg-white'>
        <AboutUs /> 
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
