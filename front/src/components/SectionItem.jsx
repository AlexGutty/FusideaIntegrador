import React from 'react';

const SectionItem = ({ title }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <h2 className="text-lg font-medium text-gray-700">{title}</h2>
  </div>
);

export default SectionItem;
