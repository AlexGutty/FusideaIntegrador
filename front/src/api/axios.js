import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esto según la URL de tu backend
});

export default api;
