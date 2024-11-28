import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      title: "Innovación",
      description: "Impulsamos la creatividad y las nuevas ideas para transformar el mundo del trabajo.",
      icon: "../imgs/innovation.png"
    },
    {
      title: "Colaboración",
      description: "Creemos en la fuerza del trabajo en equipo para lograr grandes resultados.",
      icon: "../imgs/collaboration.png"
    },
    {
      title: "Impacto",
      description: "Nuestra misión es crear un impacto positivo en la sociedad y en las industrias que tocamos.",
      icon: "../imgs/impact.png"
    }
  ];

  return (
    <main className="flex-1 bg-gradient-to-b from-[#e8f3e5] to-white">
      <div className="max-w-7xl mx-auto p-8">
        <motion.h1 
          className="text-5xl font-bold text-[#4c9141] mb-8 text-center"
          {...fadeIn}
        >
          Acerca de Nosotros
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto text-center"
          {...fadeIn}
        >
          En Fusidea, nos dedicamos a construir una comunidad sólida donde los profesionales de diversas disciplinas puedan colaborar en proyectos que realmente marquen la diferencia. Nuestra misión es impulsar el intercambio de conocimientos, fomentar la innovación y crear oportunidades reales para todos.
        </motion.p>

        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="../imgs/about_us.jpg"
            alt="Equipo de Fusidea colaborando"
            className="rounded-lg shadow-2xl mx-auto max-w-full"
          />
          <div className="absolute inset-0 bg-[#4c9141] opacity-20 rounded-lg"></div>
        </motion.div>

        <motion.h2 
          className="text-3xl font-semibold text-[#4c9141] mb-12 text-center"
          {...fadeIn}
        >
          Nuestros Valores
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-24 h-24 mb-4 bg-[#e8f3e5] rounded-full flex items-center justify-center">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-16 h-16 transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#4c9141] mb-2">{value.title}</h3>
              <p className="text-gray-700 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          {...fadeIn}
        >
          <h2 className="text-3xl font-semibold text-[#4c9141] mb-6">Únete a Nuestra Comunidad</h2>
          <p className="text-xl text-gray-700 mb-8">
            Sé parte de una red global de innovadores y creadores. Juntos, podemos hacer la diferencia.
          </p>
          <a 
            href="/register" 
            className="bg-[#4c9141] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#3a6f32] transition duration-300 ease-in-out inline-block"
          >
            Comienza Ahora
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutUs;


