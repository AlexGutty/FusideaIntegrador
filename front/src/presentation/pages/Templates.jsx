import React from 'react';
import TemplateCard from '../components/TemplateCard';

/**
 * Componente `Templates` que muestra una galería de plantillas profesionales disponibles en Fusidea.
 * Cada plantilla se puede personalizar en herramientas de diseño como Canva o Figma.
 * @returns {JSX.Element} - La estructura de la página con la galería de plantillas.
 */

const templatesData = [
  {
    id: 1,
    title: "Business Proposal",
    description: "Professional template for business proposals and pitches.",
    image: "/placeholder.svg?height=300&width=400",
    canvaLink: "https://www.canva.com/design/template-business-proposal",
    figmaLink: "https://www.figma.com/community/file/template-business-proposal"
  },
  {
    id: 2,
    title: "Social Media Kit",
    description: "Complete set of templates for your social media presence.",
    image: "/placeholder.svg?height=300&width=400",
    canvaLink: "https://www.canva.com/design/template-social-media-kit",
    figmaLink: "https://www.figma.com/community/file/template-social-media-kit"
  },
  {
    id: 3,
    title: "Project Timeline",
    description: "Visualize your project schedule with this timeline template.",
    image: "/placeholder.svg?height=300&width=400",
    canvaLink: "https://www.canva.com/design/template-project-timeline",
    figmaLink: "https://www.figma.com/community/file/template-project-timeline"
  },
  {
    id: 4,
    title: "Marketing Brochure",
    description: "Showcase your products or services with this brochure template.",
    image: "/placeholder.svg?height=300&width=400",
    canvaLink: "https://www.canva.com/design/template-marketing-brochure",
    figmaLink: "https://www.figma.com/community/file/template-marketing-brochure"
  },
  {
    id: 5,
    title: "Resume/CV",
    description: "Stand out with this professional resume/CV template.",
    image: "/placeholder.svg?height=300&width=400",
    canvaLink: "https://www.canva.com/design/template-resume-cv",
    figmaLink: "https://www.figma.com/community/file/template-resume-cv"
  },
  {
    id: 6,
    title: "Presentation Deck",
    description: "Impress your audience with this sleek presentation template.",
    image: "/placeholder.svg?height=300&width=400",
    canvaLink: "https://www.canva.com/design/template-presentation-deck",
    figmaLink: "https://www.figma.com/community/file/template-presentation-deck"
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

