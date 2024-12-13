import { useState, useEffect } from 'react';
import api from '../../api/axios';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await api.get('/auth/me'); // Endpoint que devuelve los datos del usuario
      setUser(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al cargar los datos del usuario');
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      const { data } = await api.put('/auth/update', updatedData); // Endpoint para actualizar usuario
      setUser(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al actualizar el perfil');
    }
  };

  const updateAvatar = async (avatar) => {
    try {
      const { data } = await api.put('/auth/update-avatar', { avatar });
      setUser(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al actualizar el avatar');
    }
  };

  const updateBanner = async (banner) => {
    try {
      const { data } = await api.put('/auth/update-banner', { banner });
      setUser(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al actualizar el banner');
    }
  };

  const addCertification = async (certification) => {
    try {
      const { data } = await api.post('/auth/add-certification', { certification });
      setUser(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al agregar certificación');
    }
  };

  const addCollaborativeProject = async (project) => {
    try {
      const { data } = await api.post('/auth/add-project', { project });
      setUser(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al agregar proyecto colaborativo');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    isLoading,
    error,
    updateUser,
    updateAvatar,
    updateBanner,
    addCertification,
    addCollaborativeProject,
  };
};
