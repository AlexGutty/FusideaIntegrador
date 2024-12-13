import React from 'react';
import useAuth from '../../hooks/useAuth';

export const AvatarProfile = ({ user, updateAvatar }) => {
  const { updateUserAvatar } = useAuth();

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




