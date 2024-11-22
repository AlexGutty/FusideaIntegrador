import axios from 'axios';

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
