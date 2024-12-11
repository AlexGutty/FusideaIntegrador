import React from 'react';
import usePasswordRecovery from '../hooks/usePasswordRecovery';

/**
 * Componente PasswordRecoveryForm.
 * Renderiza un formulario para que los usuarios puedan solicitar la recuperación de su contraseña 
 * mediante el envío de un enlace al correo electrónico registrado.
 * Incluye manejo de errores y mensajes de éxito.
 *
 * @component
 * @returns {JSX.Element} Formulario de recuperación de contraseña.
 */

const PasswordRecoveryForm = () => {
  const {
    email,
    errorMessage,
    successMessage,
    setEmail,
    handleSubmit,
  } = usePasswordRecovery();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto rounded"
          src="/imgs/logo2.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Recupera tu contraseña
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          {errorMessage && <div className="text-red-500 text-sm mt-1">{errorMessage}</div>}
          {successMessage && <div className="text-green-500 text-sm mt-1">{successMessage}</div>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar enlace de recuperación
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;

