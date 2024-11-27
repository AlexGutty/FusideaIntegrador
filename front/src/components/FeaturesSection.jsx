import React from 'react';
import { FaUsers, FaLightbulb, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="text-5xl mb-4 text-[#4c9141]" />,
    title: 'Comunidad Colaborativa',
    description: 'Conéctate con expertos y entusiastas de todo el mundo.'
  },
  {
    icon: <FaLightbulb className="text-5xl mb-4 text-[#4c9141]" />,
    title: 'Proyectos Innovadores',
    description: 'Participa en proyectos que desafían los límites de la creatividad.'
  },
  {
    icon: <FaChartLine className="text-5xl mb-4 text-[#4c9141]" />,
    title: 'Crecimiento Profesional',
    description: 'Desarrolla tus habilidades y amplía tu red profesional.'
  },
  {
    icon: <FaShieldAlt className="text-5xl mb-4 text-[#4c9141]" />,
    title: 'Entorno Seguro',
    description: 'Colabora en un espacio seguro y respetuoso para todos.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#4c9141] mb-16">¿Por Qué Elegir Fusidea?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg shadow-lg bg-gray-50 transform transition duration-300 hover:scale-105">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4c9141]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


