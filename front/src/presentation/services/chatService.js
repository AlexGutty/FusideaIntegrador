import axios from 'axios';

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

