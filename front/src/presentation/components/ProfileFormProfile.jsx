import React from 'react';
import { useForm } from 'react-hook-form';

export const ProfileFormProfile = ({ user, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user.name,
      last_name: user.last_name,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      aboutname: user.aboutname,
    }
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-4 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="name"
          {...register('name', { required: 'Este campo es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
          Apellido
        </label>
        <input
          id="last_name"
          {...register('last_name', { required: 'Este campo es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.last_name && (
          <p className="mt-1 text-sm text-red-600">{errors.last_name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Género
        </label>
        <select
          id="gender"
          {...register('gender', { required: 'Este campo es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="MASCULINO">Masculino</option>
          <option value="FEMININO">Femenino</option>
          <option value="OUTRO">Otro</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Teléfono
        </label>
        <input
          id="phoneNumber"
          {...register('phoneNumber', { required: 'Este campo es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="aboutname" className="block text-sm font-medium text-gray-700">
          Sobre mí
        </label>
        <textarea
          id="aboutname"
          {...register('aboutname', { required: 'Este campo es requerido' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={4}
        />
        {errors.aboutname && (
          <p className="mt-1 text-sm text-red-600">{errors.aboutname.message}</p>
        )}
      </div>

      <div>
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar Cambios
        </button>
      </div>
    </form>
  );
};

