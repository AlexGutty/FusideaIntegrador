const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
require('dotenv').config();

const app = express();

// Middlewares globales
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }));
app.use(express.json());
app.use(loggerMiddleware);

// Conexión a la base de datos
connectDB();

// Rutas principales
app.use('/api', routes);

// Manejo de errores y rutas no encontradas
app.use(notFoundMiddleware);
app.use(errorHandler);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
