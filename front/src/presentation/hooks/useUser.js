import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api'; // Reemplaza esto con la URL de tu backend

export const useUser = (userId) => {
  const queryClient = useQueryClient();

  // Query principal para obtener datos del usuario
  const { data: user, isLoading, error } = useQuery(
    ['user', userId],
    () => axios.get(`${apiUrl}/user/${userId}`).then(res => res.data)
  );

  // Mutation para actualizar el perfil del usuario
  const updateUser = useMutation(
    (updateData) => axios.put(`${apiUrl}/user/${userId}`, updateData).then(res => res.data),
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para actualizar el avatar
  const updateAvatar = useMutation(
    (file) => {
      const formData = new FormData();
      formData.append('avatar', file);
      return axios.put(`${apiUrl}/user/${userId}/avatar`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(res => res.data);
    },
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para actualizar el banner
  const updateBanner = useMutation(
    (file) => {
      const formData = new FormData();
      formData.append('banner', file);
      return axios.put(`${apiUrl}/user/${userId}/banner`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(res => res.data);
    },
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para añadir certificación
  const addCertification = useMutation(
    (certification) => axios.post(`${apiUrl}/user/${userId}/certifications`, certification).then(res => res.data),
    {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData(['user', userId], updatedUser);
      },
    }
  );

  // Mutation para añadir proyecto colaborativo
  const addCollaborativeProject = useMutation(
    (project) => axios.post(`${apiUrl}/user/${userId}/collaborative-projects`, project).then(res => res.data),
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
