import React from 'react';
import useAuthState from '../../hooks/useAuthState';

/**
 * Componente AvatarProfile.
 * Permite al usuario visualizar y actualizar su avatar.
 * Al hacer clic en el botón "Editar", el usuario puede cargar una nueva imagen que actualizará su avatar en el perfil.
 * 
 * @param {Object} user - Objeto que contiene la información del usuario, incluido el avatar.
 * @param {Function} updateAvatar - Función que actualiza el avatar del usuario, generalmente se conecta a una API para subir la nueva imagen.
 * 
 * @returns {JSX.Element} - Componente que muestra la imagen del avatar y permite editarla.
 */

export const AvatarProfile = ({ user, updateAvatar }) => {
  const { updateUserAvatar } = useAuthState();

  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const updatedUser = await updateAvatar(file);
        updateUserAvatar(updatedUser.avatar);
      } catch (error) {
        console.error('Error updating avatar:', error);
      }
    }
  };

  return (
    <div className="relative">
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="w-32 h-32 rounded-full border-4 border-white object-cover"
      />
      <input
        type="file"
        id="avatar-upload"
        className="hidden"
        onChange={handleAvatarChange}
        accept="image/*"
      />
      <label
        htmlFor="avatar-upload"
        className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Editar
      </label>
    </div>
  );
};




