import React from 'react';

/**
 * Componente BannerProfile.
 * Muestra el banner de perfil de un usuario, permitiéndole cambiar la imagen del banner
 * mediante la selección de un archivo desde su dispositivo.
 * 
 * @param {Object} user - El objeto de usuario que contiene la información del banner actual.
 * @param {Function} updateBanner - Función que actualiza el banner de perfil del usuario.
 * 
 * @returns {JSX.Element} - Componente visual que muestra el banner de perfil con un botón para cambiar la imagen del banner.
 */

export const BannerProfile = ({ user, updateBanner }) => {
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      updateBanner(file);
    }
  };

  return (
    <div className="relative h-48 md:h-64">
      <img
        src={user.banner}
        alt="Profile banner"
        className="w-full h-full object-cover"
      />
      <input
        type="file"
        id="banner-upload"
        className="hidden"
        onChange={handleBannerChange}
        accept="image/*"
      />
      <label
        htmlFor="banner-upload"
        className="absolute bottom-4 right-4 bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Editar Banner
      </label>
    </div>
  );
};




