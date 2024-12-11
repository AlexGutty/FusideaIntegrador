import React, { createContext, useState } from 'react';

// Crear el contexto
export const ProjectContext = createContext();

// Proveedor del contexto
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // Agregar un nuevo proyecto
  const addProject = (project) => {
    setProjects((prev) => [...prev, { ...project, id: Date.now() }]);
  };

  // Eliminar un proyecto existente
  const removeProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  // Simular una carga inicial de proyectos (puedes reemplazar esto con una llamada a un servidor)
  const fetchProjects = () => {
    const dummyProjects = [
      { id: 1, name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
      { id: 2, name: 'Proyecto 2', description: 'Descripción del proyecto 2' },
    ];
    setProjects(dummyProjects);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, removeProject, fetchProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
