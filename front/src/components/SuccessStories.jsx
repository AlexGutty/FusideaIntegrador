import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

/**
 * Sección de Historias de Éxito que destaca proyectos colaborativos exitosos de Fusidea.
 * Muestra testimonios, miembros de equipos y sus logros, usando animaciones de entrada con Framer Motion.
 * 
 * @returns {JSX.Element} - Renderiza las historias de éxito y un llamado a la acción para unirse a Fusidea.
 */

const SuccessStories = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stories = [
    {
      title: "Revolucionando la Educación Online",
      description: "Un equipo de desarrolladores y educadores se unió para crear una plataforma de aprendizaje adaptativo que ha beneficiado a más de 100,000 estudiantes en todo el mundo.",
      members: ["Ana (Desarrolladora)", "Carlos (Educador)", "María (Diseñadora UX)"],
      quote: "Fusidea nos permitió encontrar el equipo perfecto para hacer realidad nuestra visión educativa.",
      image: "/imgs/success-story-1.jpg"
    },
    {
      title: "Solución Innovadora para Agricultura Sostenible",
      description: "Ingenieros agrícolas y expertos en IoT colaboraron para desarrollar un sistema de riego inteligente que reduce el consumo de agua en un 40%.",
      members: ["Luis (Ingeniero Agrícola)", "Elena (Experta en IoT)", "Pablo (Desarrollador de Software)"],
      quote: "Sin Fusidea, nunca habríamos encontrado colaboradores con habilidades tan complementarias.",
      image: "/imgs/success-story-2.jpg"
    },
    {
      title: "App de Salud Mental que Cambia Vidas",
      description: "Psicólogos y desarrolladores de apps unieron fuerzas para crear una aplicación de terapia cognitivo-conductual que ha ayudado a miles de personas a manejar la ansiedad y la depresión.",
      members: ["Sofía (Psicóloga)", "Javier (Desarrollador de Apps)", "Laura (Diseñadora Gráfica)"],
      quote: "Fusidea nos dio la plataforma para combinar nuestras pasiones y crear algo verdaderamente impactante.",
      image: "/imgs/success-story-3.jpg"
    }
  ];

  return (
    <main className="flex-1 bg-gradient-to-b from-[#e8f3e5] to-white min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <motion.h1 
          className="text-5xl font-bold text-[#4c9141] mb-8 text-center"
          {...fadeIn}
        >
          Historias de Éxito
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto text-center"
          {...fadeIn}
        >
          Descubre cómo los profesionales en Fusidea están colaborando para crear soluciones innovadoras y generar un impacto positivo en el mundo.
        </motion.p>

        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-xl mb-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src={story.image} alt={story.title} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#4c9141] font-semibold">{story.title}</div>
                <p className="mt-2 text-gray-500">{story.description}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#4c9141]">Equipo:</h3>
                  <ul className="mt-2 space-y-1">
                    {story.members.map((member, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaStar className="text-yellow-400 mr-2" />
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center">
                  <FaQuoteLeft className="text-[#4c9141] text-3xl mr-4" />
                  <p className="italic text-gray-600">{story.quote}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div 
          className="bg-[#4c9141] text-white p-8 rounded-lg shadow-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para Escribir Tu Propia Historia de Éxito?</h2>
          <p className="text-xl mb-6">
            Únete a Fusidea hoy y comienza a colaborar en proyectos innovadores que pueden cambiar el mundo.
          </p>
          <a 
            href="/register" 
            className="bg-white text-[#4c9141] py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out inline-block"
          >
            Comienza Tu Viaje
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default SuccessStories;

