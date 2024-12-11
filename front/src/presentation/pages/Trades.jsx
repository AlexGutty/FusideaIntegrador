import React from 'react';
import MyTrades from '../components/MyTrades'; 

/**
 * Componente `Trades` que se encarga de renderizar la sección de intercambios o transacciones 
 * de un usuario. Dentro de este componente se muestra el componente `MyTrades`, que puede 
 * gestionar y mostrar los intercambios activos del usuario.
 * @returns {JSX.Element} - La estructura de la página con la sección de intercambios del usuario.
 */

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
