import React, { useState } from 'react';

/**
 * Componente AccordionItem.
 * Este componente representa un ítem dentro de un acordeón, que muestra un título y su contenido asociado.
 * El contenido se despliega o colapsa al hacer clic en el encabezado.
 * 
 * @param {string} title - Título del ítem del acordeón.
 * @param {string} content - Contenido que se muestra cuando el ítem está expandido.
 * @returns {JSX.Element} - Un ítem de acordeón que puede expandirse o colapsarse.
 */

/**
 * Componente MyTrades.
 * Este componente muestra una lista de intercambios de un usuario en tres estados: Pendientes, En curso y Finalizados.
 * Cada estado se presenta dentro de un acordeón para mostrar u ocultar el contenido.
 * 
 * @param {string} pending - Lista de intercambios pendientes.
 * @param {string} inProgress - Lista de intercambios en curso.
 * @param {string} completed - Lista de intercambios finalizados.
 * @returns {JSX.Element} - Una vista con tres acordeones mostrando los intercambios en distintos estados.
 */

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item mb-4 border-b border-gray-300 animate-slide-down">
      <button
        className="accordion-header w-full text-left py-4 px-6 flex justify-between items-center text-lg text-gray-600 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span className="accordion-arrow">{isOpen ? '−' : '→'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content px-6 py-4 bg-gray-100">
          <p className="text-gray-500">{content}</p>
        </div>
      )}
    </div>
  );
};

const MyTrades = ({ pending, inProgress, completed }) => {
  return (
    <main className="flex-1 max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg animate-slide-down">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">My Trades</h1>

      <div id="accordion-container">
        <AccordionItem
          title="Pendientes"
          content={pending || "No hay trades pendientes por el momento."} 
        />
        <AccordionItem
          title="En curso"
          content={inProgress || "No hay trades en curso por el momento."} 
        />
        <AccordionItem
          title="Finalizados"
          content={completed || "No hay trades finalizados por el momento."} 
        />
      </div>
    </main>
  );
};

export default MyTrades;
