import { useState } from 'react';

const useHeroSection = () => {
  const [heroSection] = useState({
    title: "Colabora, Innova y Crece con Fusidea",
    description: "Únete a una comunidad global de creativos y profesionales. Desarrolla proyectos innovadores, amplía tus habilidades y haz conexiones significativas en un entorno colaborativo único.",
    buttonStartText: "¡Comienza Ahora!",
    buttonLearnMoreText: "Descubre Más",
    logoImg: "../../public/imgs/logo1.jpg",
    mainImage: "../../public/imgs/man_work.jpg"
  });

  return heroSection;
};

export default useHeroSection;


