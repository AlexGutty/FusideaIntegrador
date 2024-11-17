import { useState } from 'react';

const useHeroSection = () => {
  const [heroSection] = useState({
    title: "Con nosotros tendrás los verdaderos proyectos colaborativos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    buttonStartText: "¡Empezar!",
    buttonLearnMoreText: "Saber más &rarr;",
    logoImg: "/imgs/icono.png",
    mainImage: "/imgs/man_work.jpg"
  });

  return heroSection;
};

export default useHeroSection;
