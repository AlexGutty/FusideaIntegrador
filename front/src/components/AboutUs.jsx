import React from 'react';

const AboutUs = () => {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-8">Acerca de Nosotros</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          En Fusidea, nos dedicamos a construir una comunidad sólida donde los profesionales de diversas disciplinas puedan colaborar en proyectos que realmente marquen la diferencia. Nuestra misión es impulsar el intercambio de conocimientos, fomentar la innovación y crear oportunidades reales para todos.
        </p>

        <img
          src="../imgs/about_us.jpg"
          alt="Imagen acerca de nosotros"
          className="rounded-lg shadow-lg mx-auto mb-12 max-w-full"
        />

        {/* Nuestros valores alineados en fila */}
        <section className="flex justify-center space-x-8">
          <div className="value-card flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 w-80">
            <img
              src="../imgs/innovation.png"
              alt="Innovación"
              className="w-24 h-24 mb-4 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Innovación</h3>
            <p className="text-gray-600">Impulsamos la creatividad y las nuevas ideas para transformar el mundo del trabajo.</p>
          </div>
          <div className="value-card flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 w-80">
            <img
              src="../imgs/collaboration.png"
              alt="Colaboración"
              className="w-24 h-24 mb-4 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Colaboración</h3>
            <p className="text-gray-600">Creemos en la fuerza del trabajo en equipo para lograr grandes resultados.</p>
          </div>
          <div className="value-card flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 w-80">
            <img
              src="../imgs/impact.png"
              alt="Impacto"
              className="w-24 h-24 mb-4 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Impacto</h3>
            <p className="text-gray-600">Nuestra misión es crear un impacto positivo en la sociedad y en las industrias que tocamos.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
