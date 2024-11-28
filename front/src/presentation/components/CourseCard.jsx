import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const CourseCard = ({ course, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#4c9141] mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <BookOpenIcon className="h-5 w-5 mr-1 text-[#4c9141]" />
            <span>{course.category}</span>
          </div>
          <div className="flex items-center">
            <AcademicCapIcon className="h-5 w-5 mr-1 text-[#4c9141]" />
            <span>{course.level}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
