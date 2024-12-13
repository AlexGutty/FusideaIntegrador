import { useState, useEffect } from 'react';
import api from '../../api/axios'; // Cambia la ruta según sea necesario

const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data
  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get(`/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al obtener el usuario');
    } finally {
      setIsLoading(false);
    }
  };

  // Update user details
  const updateUser = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.put(`/users/${userId}`, data);
      setUser(response.data);
      alert('Usuario actualizado con éxito');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al actualizar el usuario');
    } finally {
      setIsLoading(false);
    }
  };

  // Update avatar
  const updateAvatar = async (file) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await api.post(`/users/${userId}/avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUser(response.data);
      alert('Avatar actualizado con éxito');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al actualizar el avatar');
    } finally {
      setIsLoading(false);
    }
  };

  // Update banner
  const updateBanner = async (file) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('banner', file);

      const response = await api.post(`/users/${userId}/banner`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUser(response.data);
      alert('Banner actualizado con éxito');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al actualizar el banner');
    } finally {
      setIsLoading(false);
    }
  };

  // Add a certification
  const addCertification = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post(`/users/${userId}/certifications`, data);
      setUser((prevUser) => ({
        ...prevUser,
        certifications: [...(prevUser.certifications || []), response.data],
      }));
      alert('Certificación añadida con éxito');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al añadir la certificación');
    } finally {
      setIsLoading(false);
    }
  };

  // Add a collaborative project
  const addCollaborativeProject = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post(`/users/${userId}/projects`, data);
      setUser((prevUser) => ({
        ...prevUser,
        collaborativeProjects: [...(prevUser.collaborativeProjects || []), response.data],
      }));
      alert('Proyecto colaborativo añadido con éxito');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al añadir el proyecto colaborativo');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchUser();
  }, [userId]);

  return {
    user,
    isLoading,
    error,
    fetchUser,
    updateUser,
    updateAvatar,
    updateBanner,
    addCertification,
    addCollaborativeProject,
  };
};

export default useUser;
