import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // Incluye cookies en las solicitudes
});

// Interceptor para agregar el token en el encabezado Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Recupera el token del almacenamiento local
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
