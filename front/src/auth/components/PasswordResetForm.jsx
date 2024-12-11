import React from 'react';
import usePasswordReset from '../hooks/usePasswordReset';


 /**
 * Componente PasswordResetForm.
 * Permite a los usuarios restablecer su contraseña proporcionando una nueva contraseña y su confirmación.
 *
 * @component
 * @returns {JSX.Element} Formulario de restablecimiento de contraseña.
 */
 
const PasswordResetForm = () => {
  const {
    newPassword,
    confirmPassword,
    successMessage,
    errorMessage,
    setNewPassword,
    setConfirmPassword,
    handleSubmit,
  } = usePasswordReset();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto rounded"
          src="/imgs/logo2.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Restablece tu contraseña
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="new_password" className="block text-sm font-medium leading-6 text-gray-900">
              Nueva Contraseña
            </label>
            <input
              id="new_password"
              name="new_password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
              Confirmar Contraseña
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Restablecer Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetForm;

