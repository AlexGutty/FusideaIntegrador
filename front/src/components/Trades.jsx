import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

/**
 * Componente que presenta las oportunidades de "trades" en Fusidea.
 * Muestra características clave como la colaboración efectiva, innovación conjunta, 
 * impulso de proyectos y comunidad de apoyo a través de una animación de entrada.
 * 
 * @returns {JSX.Element} - Renderiza secciones informativas sobre los "trades", 
 * incluyendo un listado de cómo funcionan y llamadas a la acción para unirse.
 */

const Trades = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <FaHandshake className="text-4xl text-[#4c9141] mb-4" />,
      title: "Colaboración Efectiva",
      description: "Conecta con profesionales que complementan tus habilidades para crear equipos poderosos."
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#4c9141] mb-4" />,
      title: "Innovación Conjunta",
      description: "Combina diferentes perspectivas y experticias para generar soluciones innovadoras."
    },
    {
      icon: <FaRocket className="text-4xl text-[#4c9141] mb-4" />,
      title: "Impulso de Proyectos",
      description: "Acelera el desarrollo de tus ideas con el apoyo de colaboradores especializados."
    },
    {
      icon: <FaUsers className="text-4xl text-[#4c9141] mb-4" />,
      title: "Comunidad de Apoyo",
      description: "Forma parte de una red de profesionales dispuestos a compartir conocimientos y recursos."
    }
  ];

  return (
    <main className="flex-1 bg-gradient-to-b from-[#e8f3e5] to-white min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <motion.h1 
          className="text-5xl font-bold text-[#4c9141] mb-8 text-center"
          {...fadeIn}
        >
          Trades en Fusidea
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto text-center"
          {...fadeIn}
        >
          En Fusidea, los "trades" son más que simples intercambios. Son oportunidades para crear conexiones poderosas, 
          donde profesionales con habilidades complementarias se unen para trabajar en proyectos innovadores y alcanzar objetivos comunes.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold text-[#4c9141] mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-[#4c9141] text-white p-8 rounded-lg shadow-xl mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">¿Cómo Funcionan los Trades en Fusidea?</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Crea tu perfil detallando tus habilidades y experiencias.</li>
            <li>Explora proyectos y perfiles de otros profesionales.</li>
            <li>Propón colaboraciones o únete a proyectos existentes.</li>
            <li>Trabaja en equipo, comparte conocimientos y crea algo extraordinario.</li>
            <li>Recibe y da feedback para mejorar constantemente.</li>
          </ol>
        </motion.div>

        <motion.div 
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl font-semibold text-[#4c9141] mb-6">Historias de Éxito</h2>
          <p className="text-xl text-gray-700 mb-8">
            Descubre cómo los trades en Fusidea han impulsado proyectos innovadores y carreras profesionales.
          </p>
          <a 
            href="/success-stories" 
            className="bg-[#4c9141] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#3a6f32] transition duration-300 ease-in-out inline-block"
          >
            Ver Historias de Éxito
          </a>
        </motion.div>

        <motion.div 
          className="bg-[#e8f3e5] p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-[#4c9141] mb-6 text-center">Comienza tu Viaje de Colaboración</h2>
          <p className="text-xl text-gray-700 mb-8 text-center">
            Únete a Fusidea hoy y descubre el poder de la colaboración interdisciplinaria. 
            Juntos, podemos crear el futuro.
          </p>
          <div className="text-center">
            <a 
              href="/register" 
              className="bg-[#4c9141] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#3a6f32] transition duration-300 ease-in-out inline-block"
            >
              Regístrate Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Trades;

