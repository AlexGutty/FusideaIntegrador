const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware'); // Importa correctamente como un objeto
const protectedController = require('../controllers/protectedController');

const router = express.Router();

// Ruta protegida
router.get('/protected', authenticate, protectedController);

module.exports = router;
