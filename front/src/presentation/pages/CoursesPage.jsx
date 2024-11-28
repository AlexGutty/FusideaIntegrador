import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import CourseModal from '../components/CourseModal';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const categories = ['Tecnología', 'Diseño', 'Negocios', 'Ciencias', 'Humanidades'];
const academicLevels = ['Pregrado', 'Maestría', 'Doctorado', 'Certificación'];

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch courses from backend
    // This is a placeholder. Replace with actual API call
    const fetchCourses = async () => {
      // const response = await fetch('/api/courses');
      // const data = await response.json();
      // setCourses(data);
      // setFilteredCourses(data);
      
      // Placeholder data
      const placeholderCourses = [
        { id: 1, title: 'Introducción a la Programación', category: 'Tecnología', level: 'Pregrado', description: 'Aprende los fundamentos de la programación' },
        { id: 2, title: 'Diseño UX/UI', category: 'Diseño', level: 'Certificación', description: 'Domina las técnicas de diseño de experiencia de usuario' },
        { id: 3, title: 'Gestión de Proyectos', category: 'Negocios', level: 'Maestría', description: 'Aprende a liderar proyectos eficientemente' },
        // Add more placeholder courses as needed
      ];
      setCourses(placeholderCourses);
      setFilteredCourses(placeholderCourses);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || course.category === selectedCategory) &&
      (selectedLevel === '' || course.level === selectedLevel)
    );
    setFilteredCourses(results);
  }, [searchTerm, selectedCategory, selectedLevel, courses]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-[#4c9141] mb-8 text-center">Cursos en Línea</h1>
      
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4c9141]"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <AdjustmentsHorizontalIcon className="h-5 w-5 text-[#4c9141]" />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4c9141] px-4 py-2"
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select
            value={selectedLevel}
            onChange={handleLevelChange}
            className="rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4c9141] px-4 py-2"
          >
            <option value="">Todos los niveles</option>
            {academicLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} onClick={() => handleCourseClick(course)} />
        ))}
      </motion.div>

      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedCourse}
      />
    </motion.div>
  );
};

export default CoursesPage;