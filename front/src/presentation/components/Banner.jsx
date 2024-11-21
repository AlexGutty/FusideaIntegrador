const Banner = () => {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido a Fusidea
          </h1>
          <p className="text-xl mb-6">
            Conecta, colabora y crece con otros profesionales. 
            Intercambia talentos y haz realidad tus proyectos.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explorar Proyectos
          </button>
        </div>
      </div>
    );
  }
  
  export default Banner;