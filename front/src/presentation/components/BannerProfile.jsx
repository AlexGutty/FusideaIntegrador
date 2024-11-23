import React from 'react';

export const BannerProfile = ({ user, updateBanner }) => {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      updateBanner(file);
    }
  };

  return (
    <div className="relative h-48 bg-gray-200">
      <img 
        src={user.banner} 
        alt={`${user.name}'s banner`} 
        className="w-full h-full object-cover"
      />
      <label htmlFor="banner-upload" className="absolute bottom-4 right-4 bg-blue-500 rounded-full p-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </label>
      <input 
        id="banner-upload" 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={handleFileChange}
      />
    </div>
  );
};
