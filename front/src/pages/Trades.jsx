import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header';
import MyTrades from '@/components/MyTrades'; 
import Footer from '@/components/Footer';
import './index.css';
import '@/assets/styles/global.css';
import MyTrades from '../components/MyTrades';

const Main = () => {
  return (
    <div>
      <Header />
      <main className='bg-white'>
        <MyTrades /> 
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
