import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#4c9141] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para Comenzar Tu Viaje Colaborativo?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Únete a Fusidea hoy y descubre un mundo de oportunidades para crecer, aprender y crear junto a una comunidad apasionada.</p>
        <a 
          href="/register" 
          className="bg-white text-[#4c9141] py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Regístrate Gratis
        </a>
      </div>
    </section>
  );
};

export default CallToAction;


