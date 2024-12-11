const API_URL = 'http://localhost:3000';

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
  const users = await response.json();
  
  if (users.length === 0) {
    throw new Error('Invalid email or password');
  }
  
  return users[0];
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    throw new Error('Registration failed');
  }
  
  return await response.json();
};

