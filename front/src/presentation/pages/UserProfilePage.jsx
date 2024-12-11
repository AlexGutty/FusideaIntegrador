import React, { useContext, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { ProjectContext } from '../../contexts/ProjectContext';
import { NotificationContext } from '../../contexts/NotificationContext';
import '../../index.css';
import '../../assets/styles/global.css';

/**
 * Componente `UserProfilePage` que muestra la información del perfil del usuario y su portafolio de proyectos.
 * Permite agregar nuevos proyectos al portafolio o eliminar proyectos existentes. 
 * Además, gestiona las notificaciones para informar al usuario sobre el estado de estas acciones.
 * 
 * Este componente hace uso de los siguientes Contextos:
 * - `ProjectContext`: Gestiona la lista de proyectos del usuario, proporcionando funciones para agregar y eliminar proyectos.
 * - `NotificationContext`: Permite agregar notificaciones al usuario sobre las acciones realizadas, como agregar o eliminar proyectos. 
 * Los mensajes de notificación se generan utilizando el contexto `NotificationContext` para informar al usuario sobre el éxito 
 * o la eliminación de un proyecto.
 * 
 * @returns {JSX.Element} - El componente que renderiza la página de perfil de usuario y su portafolio de proyectos.
 */

const UserProfilePage = () => {
  const { projects, fetchProjects, addProject, removeProject } = useContext(ProjectContext);
  const { addNotification } = useContext(NotificationContext);

  useEffect(() => {
    fetchProjects(); // Cargar proyectos al cargar la página
  }, []);

  const handleAddProject = () => {
    const newProject = {
      name: 'Nuevo Proyecto',
      description: 'Descripción de prueba para un proyecto',
    };
    addProject(newProject);
    addNotification('Proyecto agregado exitosamente', 'success');
  };

  const handleRemoveProject = (id) => {
    removeProject(id);
    addNotification('Proyecto eliminado', 'info');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50">
        <UserProfile />
        <section className="p-4">
          <h2 className="text-xl font-bold mb-4">Portafolio</h2>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="p-4 border rounded shadow-sm bg-white">
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button
                  onClick={() => handleRemoveProject(project.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleAddProject}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Agregar Proyecto
          </button>
        </section>
      </main>
    </div>
  );
};

export default UserProfilePage;