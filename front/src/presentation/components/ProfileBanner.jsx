import React from 'react';

const ProfileBanner = ({ profileImage }) => (
  <div className="relative bg-gradient-to-b from-blue-200 to-blue-100 h-40 rounded-t-lg">
    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
      <img
        src={profileImage || "../imgs/user_profile.jpg"}
        alt="User Profile"
        className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>
  </div>
);

export default ProfileBanner;
