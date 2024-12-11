import { useQuery, useMutation, useQueryClient } from 'react-query';

/**
 * Hook personalizado `useUser`.
 * Este hook maneja la obtención y actualización de datos de usuario utilizando `react-query` y un servicio local 
 * (simulado con `localStorage`).
 * Permite interactuar con el perfil del usuario, incluyendo la actualización del perfil, avatar, banner, 
 * certificaciones y proyectos colaborativos.
 *
 * @param {string|number} userId - ID del usuario para obtener y actualizar los datos.
 * 
 * @returns {Object} - Un objeto con los siguientes valores y funciones:
 *   @returns {Object|null} user - Datos del usuario (si se encuentran disponibles), de lo contrario `null`.
 *   @returns {boolean} isLoading - Indicador de carga (true cuando los datos se están obteniendo).
 *   @returns {string|null} error - Mensaje de error si ocurrió algún problema al obtener los datos del usuario.
 *   @returns {Function} updateUser - Función para actualizar los datos generales del perfil del usuario.
 *   @returns {Function} updateAvatar - Función para actualizar el avatar del usuario.
 *   @returns {Function} updateBanner - Función para actualizar el banner del usuario.
 *   @returns {Function} addCertification - Función para añadir una nueva certificación al perfil del usuario.
 *   @returns {Function} addCollaborativeProject - Función para añadir un nuevo proyecto colaborativo al perfil del usuario.
 */

export const useUser = (userId) => {
  const queryClient = useQueryClient();

  // Simulamos un servicio local
  const localService = {
    getUser: () => {
      const storedUser = localStorage.getItem('user');
      return Promise.resolve(storedUser ? JSON.parse(storedUser) : {
        id: 1,
        name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        id_speciality: 'Developer',
        id_role: 'Senior',
        gender: 'MASCULINO',
        phoneNumber: '123-456-7890',
        aboutname: 'Passionate about coding and technology.',
        email_verified: true,
        average_rating: 4.5,
        avatar: '/placeholder.svg?height=100&width=100',
        banner: '/placeholder.svg?height=200&width=800',
        certifications: [],
        collaborativeProjects: []
      });
    },
    updateUser: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      return Promise.resolve(data);
    },
    updateAvatar: (file) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = { ...user, avatar: URL.createObjectURL(file) };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return Promise.resolve(updatedUser);
    },
    updateBanner: (file) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = { ...user, banner: URL.createObjectURL(file) };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return Promise.resolve(updatedUser);
    },
    addCertification: (certification) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = {
        ...user,
        certifications: [...(user.certifications || []), certification]
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return Promise.resolve(updatedUser);
    },
    addCollaborativeProject: (project) => {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = {
        ...user,
        collaborativeProjects: [...(user.collaborativeProjects || []), project]
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return Promise.resolve(updatedUser);
    }
  };

  // Query principal para obtener datos del usuario
  const { data: user, isLoading, error } = useQuery(
    ['user', userId],
    () => localService.getUser(userId)
  );

  // Mutation para actualizar el perfil del usuario
  const updateUser = useMutation(
    (updateData) => localService.updateUser({ ...user, ...updateData }),
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para actualizar el avatar
  const updateAvatar = useMutation(
    (file) => localService.updateAvatar(file),
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para actualizar el banner
  const updateBanner = useMutation(
    (file) => localService.updateBanner(file),
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para añadir certificación
  const addCertification = useMutation(
    (certification) => localService.addCertification({ ...certification, id: Date.now() }),
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para añadir proyecto colaborativo
  const addCollaborativeProject = useMutation(
    (project) => localService.addCollaborativeProject({ ...project, id: Date.now() }),
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  return {
    user,
    isLoading,
    error,
    updateUser: updateUser.mutate,
    updateAvatar: updateAvatar.mutate,
    updateBanner: updateBanner.mutate,
    addCertification: addCertification.mutate,
    addCollaborativeProject: addCollaborativeProject.mutate
  };
};