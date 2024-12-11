import React from 'react';
import { FaPaintBrush, FaFigma } from 'react-icons/fa';

/**
 * Componente TemplateCard.
 * Este componente representa una tarjeta de una plantilla con su título, descripción, imagen
 * y enlaces para editar la plantilla en Canva y Figma.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - El título de la plantilla.
 * @param {string} props.description - La descripción breve de la plantilla.
 * @param {string} props.image - La URL de la imagen que representa la plantilla.
 * @param {string} props.canvaLink - Enlace para editar la plantilla en Canva.
 * @param {string} props.figmaLink - Enlace para editar la plantilla en Figma.
 * @returns {JSX.Element} - Una tarjeta que muestra la información de la plantilla con los enlaces a Canva y Figma.
 */

const TemplateCard = ({ title, description, image, canvaLink, figmaLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-slide-down">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={canvaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <FaPaintBrush className="mr-2" />
            Edit in Canva
          </a>
          <a
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-500 hover:text-purple-700"
          >
            <FaFigma className="mr-2" />
            Edit in Figma
          </a>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;



