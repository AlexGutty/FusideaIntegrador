const express = require('express');
const cors = require('cors'); // Importar cors
require('dotenv').config();
const db = require('./utils/db');
const authRoutes = require('./routes/authRoutes');

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
app.use('/api/auth', authRoutes);

// Verificar conexión con la base de datos
db.authenticate()
  .then(() => console.log('Conexión con la base de datos establecida'))
  .catch((err) => console.error('Error en la conexión:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


