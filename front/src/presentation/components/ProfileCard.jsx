import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

/**
 * Componente UserCard.
 * Este componente muestra una tarjeta de usuario con información como su banner, avatar, especialidad,
 * calificación promedio y una breve descripción sobre él.
 * Además, permite agregar al usuario como colaborador o calificarlo.
 * 
 * @param {Object} user - Objeto que contiene la información del usuario (nombre, apellido, email, especialidad, calificación promedio, etc.).
 * @param {Function} onAddCollaborator - Función que se ejecuta al hacer clic en el botón "Agregar Colaborador".
 * @param {Function} onRate - Función que se ejecuta al hacer clic en el botón "Calificar".
 * @returns {JSX.Element} - Una tarjeta que muestra la información del usuario con botones para agregarlo como colaborador o calificarlo.
 */

const UserCard = ({ user, onAddCollaborator, onRate }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={user.banner || '/placeholder-banner.jpg'}
          alt={`${user.name}'s banner`}
          className="w-full h-full object-cover"
        />
        <img
          src={user.avatar || '/placeholder-avatar.jpg'}
          alt={`${user.name}'s avatar`}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
        />
      </div>
      <div className="pt-16 px-6 pb-6">
        <h2 className="text-xl font-semibold text-center mb-2">{user.name} {user.last_name}</h2>
        <p className="text-gray-600 text-center mb-4">{user.email}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Especialidad: {user.speciality}</span>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
            <span>{user.average_rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">{user.aboutname}</p>
        <button
          onClick={() => onAddCollaborator(user.id)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Agregar Colaborador
        </button>
        <button
          onClick={() => onRate(user)}
          className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Calificar
        </button>
      </div>
    </div>
  );
};

export default UserCard;

