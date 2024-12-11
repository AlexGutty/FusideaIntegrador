import React from 'react';

/**
 * Componente ProfileInfo.
 * Este componente muestra la información básica de un perfil de usuario, como el nombre, la calificación y una breve descripción.
 * Además, incluye un botón para editar el perfil.
 * 
 * @param {string} name - El nombre del usuario.
 * @param {string} rating - La calificación del usuario.
 * @param {string} description - Una breve descripción del usuario.
 * @returns {JSX.Element} - Un componente que muestra el nombre, la calificación, la descripción del perfil y un botón para editar el perfil.
 */

const ProfileInfo = ({ name, rating, description }) => (
  <div className="text-center mt-16">
    <h1 className="text-2xl font-semibold text-gray-800">{name || "Nombre de usuario"}</h1>
    <p className="text-sm text-gray-500">{rating || "No ratings yet!"}</p>
    <p className="mt-2 text-gray-600">{description || "Conéctate con el usuario para obtener más información."}</p>
    <div className="mt-4">
      <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <i className="fas fa-edit mr-2"></i> Edit Perfil
      </button>
    </div>
  </div>
);

export default ProfileInfo;
