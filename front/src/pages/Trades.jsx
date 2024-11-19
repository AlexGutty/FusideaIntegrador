import React from 'react';
import Header from '../components/Header';
import MyTrades from '../components/MyTrades'; 
import Footer from '../components/Footer';
import '../index.css';
import '../assets/styles/global.css';

const Trades = () => {
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

export default Trades;
