import React from 'react';
import MyTrades from '../components/MyTrades'; 

const Trades = () => {
  return (
    <div>
      <main className="flex-1 max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <MyTrades /> 
      </main>
    </div>
  );
};

export default Trades;
