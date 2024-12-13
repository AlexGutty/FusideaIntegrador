import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const categories = ['Tecnología', 'Diseño', 'Negocios', 'Ciencias', 'Humanidades'];
const academicLevels = ['Pregrado', 'Maestría', 'Doctorado', 'Certificación'];

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const placeholderCourses = [
        { 
          id: 1, 
          title: 'Introducción a la Programación', 
          category: 'Tecnología', 
          level: 'Pregrado', 
          description: 'Aprende los fundamentos de la programación', 
          fullDescription: 'Este curso te introducirá a los conceptos básicos de la programación con Scratch, incluyendo variables, estructuras de control, funciones y más. Perfecto para principiantes.',
          image: 'https://img.freepik.com/foto-gratis/vista-superior-pirata-informatico-irreconocible-que-realiza-ciberataque-noche_1098-18706.jpg?t=st=1734102382~exp=1734105982~hmac=4da5c5b64e02bd562ff113592bdce86e7a84c970466467a6a85d9b7347a3f3f3&w=740',
          pdfLink: 'https://drive.google.com/file/d/0ByeS4oOUV-49NzFiUDJSeFBvTHc/view?resourcekey=0-a-Y0RLItyjYnhMtmvdknqw'
        },
        { 
          id: 2, 
          title: 'Diseño UX/UI', 
          category: 'Diseño', 
          level: 'Certificación', 
          description: 'Domina las técnicas de diseño de experiencia de usuario', 
          fullDescription: 'Aprende a crear interfaces intuitivas y atractivas. Este curso cubre principios de diseño, prototipado, y evaluación de usabilidad.',
          image: 'https://img.freepik.com/foto-gratis/manos-alto-angulo-sosteniendo-papel_23-2149930977.jpg?t=st=1734102418~exp=1734106018~hmac=dde408e4ea33bc74b2677f4a21583c244f6c6a5520632d156602554797614c0f&w=1380',
          pdfLink: 'https://perio.unlp.edu.ar/catedras/ecal/wp-content/uploads/sites/125/2023/02/Diseno-UX-UI.pdf'
        },
        { 
          id: 3, 
          title: 'Gestión de Proyectos', 
          category: 'Negocios', 
          level: 'Maestría', 
          description: 'Aprende a liderar proyectos eficientemente', 
          fullDescription: 'Desarrolla habilidades para planificar, ejecutar y cerrar proyectos exitosamente. Incluye metodologías ágiles y tradicionales.',
          image: 'https://img.freepik.com/foto-gratis/gente-negocios-dandose-mano_53876-13391.jpg?t=st=1734102394~exp=1734105994~hmac=4d9dffb237a9dc624bc41731ca89cd5f7aae93b26a20b69fb02e5382e641442c&w=1380',
          pdfLink: 'https://repositorio.cepal.org/server/api/core/bitstreams/71d847bf-2137-4a1b-8776-017aa056a0ca/content'
        }
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

  const handleCourseClick = (courseId) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
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
          <CourseCard 
            key={course.id} 
            course={course} 
            isExpanded={course.id === expandedCourseId}
            onClick={handleCourseClick} 
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CoursesPage;

