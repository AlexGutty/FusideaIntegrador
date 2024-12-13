import React from 'react';
import TemplateCard from '../components/TemplateCard';

const templatesData = [
  {
    id: 1,
    title: "Business Proposal",
    description: "Plantilla profesional para propuestas de negocio y lanzamientos.",
    image: "https://img.freepik.com/foto-gratis/trabajo-equipo-diversos-negocios-multietnicos-exceso-trabajo-sala-reuniones-oficina-analizando-graficos-financieros-tarde-noche_482257-2171.jpg?t=st=1734100290~exp=1734103890~hmac=5fe63afa8d5e76ab2ddd3d6b69b285928903e83eb64af7fdc647402a427546b2&w=1380",
    canvaLink: "https://www.canva.com/search?q=bussiness%20proposal",
    figmaLink: "https://www.figma.com/community/file/1175116565554028977/business-presentation-figma-template-brix-templates"
  },
  {
    id: 2,
    title: "Social Media Kit",
    description: "Completo conjunto de plantillas para su presencia en las redes sociales.",
    image: "https://img.freepik.com/foto-gratis/grupo-personas-diversas-ideas-juntos_53876-31193.jpg?t=st=1734100525~exp=1734104125~hmac=edd6ce042637b2a0bd9cb6032ffec11f31779a7d8230abace7ec90a889541cbb&w=1380",
    canvaLink: "https://www.canva.com/design/template-social-media-kit",
    figmaLink: "https://www.canva.com/search?q=social%20media"
  },
  {
    id: 3,
    title: "Project Timeline",
    description: "Visualice el calendario de su proyecto con esta plantilla de cronograma.",
    image: "https://img.freepik.com/foto-gratis/concepto-ideas-industria-produccion-fabricacion_53876-132214.jpg?t=st=1734100554~exp=1734104154~hmac=90a2ef49034d061208239cd31d361d3dc8feb4b8e5ed578716d6a1cd67497897&w=1380",
    canvaLink: "https://www.canva.com/search?q=project%20timeline",
    figmaLink: "https://www.figma.com/community/widget/1038507134198748761/timeline"
  },
  {
    id: 4,
    title: "Marketing Brochure",
    description: "Muestre sus productos o servicios con esta plantilla de folleto.",
    image: "https://img.freepik.com/foto-gratis/concepto-marketing-redes-sociales-marketing-aplicaciones_23-2150063134.jpg?t=st=1734101456~exp=1734105056~hmac=52e877a1aea7a4477aa6d67d3dbfbc853482b76c594951fe0cdee501eca42b4c&w=1380",
    canvaLink: "https://www.canva.com/search?q=marketing%20bochure",
    figmaLink: "https://www.figma.com/community/file/1088869056590960881/unifest-marketing-brochure"
  },
  {
    id: 5,
    title: "Resume/CV",
    description: "Destaca con esta plantilla de currículum vítae profesional.",
    image: "https://img.freepik.com/foto-gratis/primer-plano-candidato-dando-su-cv-mientras-solicita-trabajo-oficina_637285-6571.jpg?t=st=1734101404~exp=1734105004~hmac=a19b4c8233d2ed435ea20202d306d2e2e4cb2ca621c4ca9712e986aade292bfe&w=1380",
    canvaLink: "https://www.canva.com/search?q=resume%20cv",
    figmaLink: "https://www.figma.com/community/file/899543856243565036/cv-resume"
  },
  {
    id: 6,
    title: "Presentation Deck",
    description: "Impresione a su público con esta elegante plantilla de presentación.",
    image: "https://img.freepik.com/foto-gratis/lider-equipo-senior-que-explica-discusion-presentacion-planificacion-sesion-informativa-sala-conferencias_482257-5130.jpg?t=st=1734101427~exp=1734105027~hmac=b93e1f7d8debf21c8a3cecf7697bb9b37c7ce915f8e382b199eed35b0c3a7b46&w=1380",
    canvaLink: "https://www.canva.com/search?q=presentation%20deck",
    figmaLink: "https://www.figma.com/community/file/1160471548358427739/dark-themed-simple-slide-deck-presentation-template"
  }
];

const Templates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Fusidea Templates</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">
      Elija entre nuestra selección de plantillas profesionales y personalícelas en Canva o Figma.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templatesData.map((template) => (
          <TemplateCard key={template.id} {...template} />
        ))}
      </div>
    </div>
  );
};

export default Templates;

