import React from 'react';

export const AvatarProfile = ({ user, updateAvatar }) => {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      updateAvatar(file);
    }
  };

  return (
    <div className="relative">
      <img 
        src={user.avatar} 
        alt={`${user.name}'s avatar`} 
        className="w-32 h-32 rounded-full border-4 border-white"
      />
      <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </label>
      <input 
        id="avatar-upload" 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={handleFileChange}
      />
    </div>
  );
};
