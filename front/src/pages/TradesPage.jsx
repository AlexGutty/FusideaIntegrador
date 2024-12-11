import React from 'react';
import Trades from '../components/Trades'; 

/**
 * Página de trades.
 * Renderiza el componente de trades, donde los usuarios pueden aprender sobre las oportunidades de colaboración y cómo funcionan los "trades" en Fusidea.
 * 
 * @returns {JSX.Element} - La página de trades con detalles sobre la colaboración y el intercambio de habilidades.
 */

const TradesPage = () => {
  return (
    <div>
      <main className=''>
        <Trades /> 
      </main>
    </div>
  );
};


export default TradesPage;