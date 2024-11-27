import React from 'react';

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
