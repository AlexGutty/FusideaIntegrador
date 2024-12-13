const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Rutas de perfil de usuario
router.get('/', profileController.getProfile);
router.put('/edit', profileController.editProfile);

module.exports = router;
