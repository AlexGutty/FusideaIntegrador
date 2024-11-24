import React from 'react';
import { useForm } from 'react-hook-form';

export const CollaborativeProjectsForm = ({ projects, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); // Resetea el formulario después de enviar
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Proyectos Colaborativos</h2>
      <ul className="mb-4">
        {projects.map((project, index) => (
          <li key={index} className="mb-2 border-b pb-2">
            <strong>{project.project_name}</strong> - {project.github_link} ({project.started_at} - {project.completed_at})
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white shadow-md rounded px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="project_name" className="block text-sm font-bold mb-1">Nombre del Proyecto</label>
            <input
              id="project_name"
              {...register('project_name', { required: 'Este campo es requerido' })}
              className="border rounded w-full py-2 px-3"
            />
            {errors.project_name && <p className="text-red-500 text-xs">{errors.project_name.message}</p>}
          </div>

          <div>
            <label htmlFor="github_link" className="block text-sm font-bold mb-1">Enlace de GitHub</label>
            <input
              id="github_link"
              {...register('github_link', { required: 'Este campo es requerido' })}
              className="border rounded w-full py-2 px-3"
            />
            {errors.github_link && <p className="text-red-500 text-xs">{errors.github_link.message}</p>}
          </div>

          <div>
            <label htmlFor="started_at" className="block text-sm font-bold mb-1">Fecha de Inicio</label>
            <input
              type="date"
              id="started_at"
              {...register('started_at', { required: 'Este campo es requerido' })}
              className="border rounded w-full py-2 px-3"
            />
          </div>

          <div>
            <label htmlFor="completed_at" className="block text-sm font-bold mb-1">Fecha de Finalización</label>
            <input
              type="date"
              id="completed_at"
              {...register('completed_at')}
              className="border rounded w-full py-2 px-3"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Agregar Proyecto
          </button>
        </div>
      </form>
    </div>
  );
};
