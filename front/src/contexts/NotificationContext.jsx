import React, { createContext, useState } from 'react';

// Crear el contexto
export const NotificationContext = createContext();

// Proveedor del contexto
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Agregar una nueva notificación
  const addNotification = (message, type = 'info') => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, type, read: false },
    ]);
  };

  // Marcar una notificación como leída
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Eliminar una notificación
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAsRead, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
