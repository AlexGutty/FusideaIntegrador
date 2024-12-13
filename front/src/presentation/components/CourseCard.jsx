import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const CourseCard = ({ course, isExpanded, onClick }) => {
  return (
    <motion.div
      layout
      animate={{ height: isExpanded ? 'auto' : '100%' }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${isExpanded ? 'col-span-full' : ''}`}
      onClick={() => onClick(course.id)}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          <img src={course.image} alt={course.title} className="w-full md:w-1/3 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[#4c9141] mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <BookOpenIcon className="h-5 w-5 mr-1 text-[#4c9141]" />
                <span>{course.category}</span>
              </div>
              <div className="flex items-center">
                <AcademicCapIcon className="h-5 w-5 mr-1 text-[#4c9141]" />
                <span>{course.level}</span>
              </div>
            </div>
            {isExpanded && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Detalles del curso</h4>
                <p className="text-gray-600 mb-4">{course.fullDescription || 'Descripción completa del curso no disponible.'}</p>
                <a
                  href={course.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#4c9141] text-white rounded-md hover:bg-[#3a6f32] transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Descargando PDF para', course.title);
                  }}
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Descargar PDF
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;


