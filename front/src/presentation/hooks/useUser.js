import { useQuery, useMutation, useQueryClient } from 'react-query';

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