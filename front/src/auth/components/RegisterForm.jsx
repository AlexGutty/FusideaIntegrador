import React from 'react';
import useRegister from '../hooks/useRegister';

/**
 * Componente RegisterForm.
 * Renderiza un formulario de registro que permite a los usuarios ingresar sus datos personales,
 * seleccionar una especialidad y un rol, proporcionar una descripción personal, y subir un avatar 
 * y un banner. Incluye manejo de validación, mensajes de error y confirmación.
 *
 * @component
 * @returns {JSX.Element} Formulario de registro de usuario.
 */

const RegisterForm = () => {
  const {
    id_speciality,
    id_role,
    name,
    last_name,
    email,
    gender,
    phoneNumber,
    aboutname,
    password,
    confirmPassword,
    avatar,
    banner,
    successMessage,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useRegister();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto rounded"
          src="/imgs/logo2.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Regístrate en la plataforma
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id_speciality" className="block text-sm font-medium leading-6 text-gray-900">
              Especialidad
            </label>
            <select
              id="id_speciality"
              name="id_speciality"
              value={id_speciality}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Selecciona una especialidad</option>
              {/* Aquí deberías agregar las opciones de especialidades */}
            </select>
          </div>

          <div>
            <label htmlFor="id_role" className="block text-sm font-medium leading-6 text-gray-900">
              Rol
            </label>
            <select
              id="id_role"
              name="id_role"
              value={id_role}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Selecciona un rol</option>
              {/* Aquí deberías agregar las opciones de roles */}
            </select>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
              Apellidos
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              value={last_name}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
              Género
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Selecciona un género</option>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMENINO">Femenino</option>
              <option value="OTRO">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
              Número de Teléfono
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="aboutname" className="block text-sm font-medium leading-6 text-gray-900">
              Acerca de ti
            </label>
            <textarea
              id="aboutname"
              name="aboutname"
              value={aboutname}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Confirmar Contraseña
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="avatar" className="block text-sm font-medium leading-6 text-gray-900">
              Avatar
            </label>
            <input
              id="avatar"
              name="avatar"
              type="file"
              onChange={handleChange}
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
          </div>

          <div>
            <label htmlFor="banner" className="block text-sm font-medium leading-6 text-gray-900">
              Banner
            </label>
            <input
              id="banner"
              name="banner"
              type="file"
              onChange={handleChange}
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
          </div>

          {errorMessage && <div className="text-red-500 text-sm mt-1">{errorMessage}</div>}
          {successMessage && <div className="text-green-500 text-sm mt-1">{successMessage}</div>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;


