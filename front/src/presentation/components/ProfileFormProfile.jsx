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
    <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6">Editar Perfil</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <input
              id="name"
              {...register('name', { required: 'Este campo es requerido' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">Apellido</label>
            <input
              id="last_name"
              {...register('last_name', { required: 'Este campo es requerido' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs italic">{errors.last_name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Género</label>
            <select
              id="gender"
              {...register('gender', { required: 'Este campo es requerido' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="MASCULINO">Masculino</option>
              <option value="FEMININO">Femenino</option>
              <option value="OUTRO">Otro</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs italic">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
            <input
              id="phoneNumber"
              {...register('phoneNumber', { required: 'Este campo es requerido' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs italic">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="aboutname" className="block text-gray-700 text-sm font-bold mb-2">Sobre mí</label>
          <textarea
            id="aboutname"
            {...register('aboutname', { required: 'Este campo es requerido' })}
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.aboutname && (
            <p className="text-red-500 text-xs italic">{errors.aboutname.message}</p>
          )}
        </div>

        <div className="mt-6">
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </form>
  );
};



