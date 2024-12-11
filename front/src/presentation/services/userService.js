import axios from 'axios';

/**
 * Servicio para interactuar con la API de usuarios.
 * 
 * Este servicio proporciona métodos para obtener y actualizar datos de usuario,
 * así como para actualizar su avatar y banner utilizando la API.
 * 
 * @returns {Object} - Un objeto con las siguientes funciones:
 *   @function getUser - Obtiene los detalles de un usuario específico por su ID.
 *   @function updateUser - Actualiza los datos de un usuario específico.
 *   @function updateAvatar - Actualiza el avatar de un usuario con un archivo de imagen.
 *   @function updateBanner - Actualiza el banner de un usuario con un archivo de imagen.
 */

const API_URL = 'https://api.example.com'; 

export const userService = {
  getUser: async (userId) => {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  },

  updateUser: async (userId, updateData) => {
    const response = await axios.put(`${API_URL}/users/${userId}`, updateData);
    return response.data;
  },

  updateAvatar: async (userId, file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    const response = await axios.put(
      `${API_URL}/users/${userId}/avatar`, 
      formData, 
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );
    return response.data;
  },

  updateBanner: async (userId, file) => {
    const formData = new FormData();
    formData.append('banner', file);
    const response = await axios.put(
      `${API_URL}/users/${userId}/banner`, 
      formData, 
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );
    return response.data;
  }
};
