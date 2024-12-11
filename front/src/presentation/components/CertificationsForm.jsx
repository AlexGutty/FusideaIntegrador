import React from 'react';
import { useForm } from 'react-hook-form';

/**
 * Componente CertificationsForm.
 * Muestra un formulario que permite agregar nuevas certificaciones. Los usuarios pueden ingresar
 * información como el título, el emisor, el tipo de emisor y la fecha de emisión de la certificación.
 * Además, muestra las certificaciones ya agregadas en una lista.
 * 
 * @param {Array} certifications - Lista de certificaciones que se mostrarán en la interfaz de usuario.
 * @param {Function} onSubmit - Función que se ejecuta cuando el formulario se envía, pasando los datos ingresados.
 * 
 * @returns {JSX.Element} - Un formulario para agregar certificaciones y una lista de las certificaciones actuales.
 */

export const CertificationsForm = ({ certifications, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); // Resetea el formulario después de enviar
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Certificaciones</h2>
      <ul className="mb-4">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-2 border-b pb-2">
            <strong>{cert.title}</strong> - {cert.issuer} ({cert.issued_at})
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white shadow-md rounded px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-bold mb-1">Título</label>
            <input
              id="title"
              {...register('title', { required: 'Este campo es requerido' })}
              className="border rounded w-full py-2 px-3"
            />
            {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
          </div>

          <div>
            <label htmlFor="issuer" className="block text-sm font-bold mb-1">Emisor</label>
            <input
              id="issuer"
              {...register('issuer', { required: 'Este campo es requerido' })}
              className="border rounded w-full py-2 px-3"
            />
            {errors.issuer && <p className="text-red-500 text-xs">{errors.issuer.message}</p>}
          </div>

          <div>
            <label htmlFor="issuer_type" className="block text-sm font-bold mb-1">Tipo de Emisor</label>
            <select
              id="issuer_type"
              {...register('issuer_type', { required: 'Este campo es requerido' })}
              className="border rounded w-full py-2 px-3"
            >
              <option value="PERSONA">Persona</option>
              <option value="INSTITUCION">Institución</option>
            </select>
          </div>

          <div>
            <label htmlFor="issued_at" className="block text-sm font-bold mb-1">Fecha de Emisión</label>
            <input
              type="date"
              id="issued_at"
              {...register('issued_at', { required: 'Este campo es requerido' })}
              className="border rounded w-full py-2 px-3"
            />
            {errors.issued_at && <p className="text-red-500 text-xs">{errors.issued_at.message}</p>}
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Agregar Certificación
          </button>
        </div>
      </form>
    </div>
  );
};
