import React from 'react';

/**
 * Componente SectionItem.
 * Este componente representa un ítem de una sección con un título. Está diseñado para ser utilizado
 * como una tarjeta de contenido con un efecto de sombra al pasar el ratón.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - El título que se muestra en el ítem de la sección.
 * @returns {JSX.Element} - Un contenedor con un título, con efecto de hover para resaltar.
 */

const SectionItem = ({ title }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <h2 className="text-lg font-medium text-gray-700">{title}</h2>
  </div>
);

export default SectionItem;
