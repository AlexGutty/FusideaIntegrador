import React from 'react';

export const AvatarProfile = ({ user, updateAvatar }) => {
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      updateAvatar(file);
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



