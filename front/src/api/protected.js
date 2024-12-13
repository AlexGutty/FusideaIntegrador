import axios from 'axios';

const checkAuth = async () => {
  try {
    const response = await axios.get('/api/protected', { withCredentials: true });
    console.log('Usuario autenticado:', response.data);
  } catch (error) {
    console.error('No autenticado:', error.response?.data);
  }
};

checkAuth();
