import { useState, useEffect } from 'react';

/**
 * Hook personalizado `useChat`.
 * Este hook maneja la lógica de mensajes y salas de chat, incluyendo la recuperación, envío y almacenamiento de mensajes.
 * 
 * @param {string} chatRoomId - El ID de la sala de chat seleccionada.
 * 
 * @returns {Object} - Un objeto con los siguientes valores:
 *   @returns {Array} messages - Lista de mensajes en la sala de chat seleccionada.
 *   @returns {Function} sendMessage - Función para enviar un nuevo mensaje a la sala de chat.
 *   @returns {boolean} isLoading - Indica si los mensajes o salas de chat están siendo cargados.
 *   @returns {string|null} error - Un mensaje de error si ocurre un problema en el proceso de carga o envío.
 *   @returns {Array} chatRooms - Lista de todas las salas de chat disponibles.
 * 
 * @example
 * const { messages, sendMessage, isLoading, error, chatRooms } = useChat(chatRoomId);
 * 
 * // Uso de la función sendMessage:
 * sendMessage("Nuevo mensaje");
 */

const useChat = (chatRoomId) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    if (chatRoomId) {
      fetchMessages(chatRoomId);
    }
    fetchChatRooms();
  }, [chatRoomId]);

  const fetchMessages = async (roomId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/messages/${roomId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchChatRooms = async () => {
    try {
      const response = await fetch('/api/chatrooms');
      if (!response.ok) {
        throw new Error('Failed to fetch chat rooms');
      }
      const data = await response.json();
      setChatRooms(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const sendMessage = async (message) => {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, chatRoomId }),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      const newMessage = await response.json();
      setMessages([...messages, newMessage]);
    } catch (err) {
      setError(err.message);
    }
  };

  return { messages, sendMessage, isLoading, error, chatRooms };
};

export default useChat;





