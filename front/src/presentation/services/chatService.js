import axios from 'axios';
/**
 * Servicio para interactuar con el sistema de chat a través de la API.
 * 
 * Este servicio proporciona métodos para obtener mensajes de una sala de chat,
 * enviar nuevos mensajes y obtener las salas de chat disponibles. 
 * Utiliza `axios` para realizar las solicitudes a la API.
 * 
 * @returns {Object} - Un objeto con las siguientes funciones:
 *   @function getMessages - Obtiene los mensajes de una sala de chat especificada por su ID.
 *   @function sendMessage - Envía un mensaje a la API para ser guardado y distribuido en el chat.
 *   @function getChatRooms - Recupera todas las salas de chat disponibles.
 */

const API_URL = 'YOUR_API_URL'; // Reemplaza con tu URL de API real

const chatService = {
  getMessages: async (chatRoomId) => {
    const response = await axios.get(`${API_URL}/messages/${chatRoomId}`);
    return response.data;
  },

  sendMessage: async (message) => {
    const response = await axios.post(`${API_URL}/messages`, message);
    return response.data;
  },

  getChatRooms: async () => {
    const response = await axios.get(`${API_URL}/chatrooms`);
    return response.data;
  }
};

export default chatService;

