// protectedRoutes.js
const express = require('express');
const authenticate = require('../middlewares/authMiddleware'); // Importa directamente
const protectedController = require('../controllers/protectedController');

const router = express.Router();

// Ruta protegida
router.get('/protected', authenticate, protectedController);

module.exports = router;
