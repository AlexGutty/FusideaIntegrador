// src/hooks/useNotifications.js
import { useState, useEffect } from 'react';
import api from '../api/axios';
import useAuth from './useAuth';

const useNotifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const { data } = await api.get('/notifications');
        setNotifications(data.notifications);
      } catch (err) {
        setError(err.response?.data?.error || 'Error al obtener notificaciones');
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, [user]);

  const markAsRead = async (notificationId) => {
    try {
      await api.post('/notifications/mark-as-read', { id: notificationId });
      setNotifications((prev) =>
        prev.map((n) => (n.id === notificationId ? { ...n, isRead: true } : n))
      );
    } catch (err) {
      console.error('Error al marcar notificación como leída:', err);
    }
  };

  return { notifications, loading, error, markAsRead };
};

export default useNotifications;
