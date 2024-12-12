const express = require('express');
const cors = require('cors'); // Importar cors
require('dotenv').config();
const db = require('./utils/db');
const authRoutes = require('./routes/authRoutes');

// Importar rutas de specialties, roles y categories
const specialtyRoutes = require('./routes/specialtyRoutes');
const roleRoutes = require('./routes/roleRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
app.use(express.json());

// Configurar CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));

// Rutas
app.use('/api/auth', authRoutes);  // Ruta de autenticación
app.use('/api/specialties', specialtyRoutes);  // Ruta de specialties
app.use('/api/roles', roleRoutes);  // Ruta de roles
app.use('/api/categories', categoryRoutes);  // Ruta de categories

// Verificar conexión con la base de datos
db.authenticate()
  .then(() => console.log('Conexión con la base de datos establecida'))
  .catch((err) => console.error('Error en la conexión:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});



