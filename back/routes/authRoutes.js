const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middlewares/authMiddleware');

// Rutas de autenticación
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/forgot-password', authController.forgotPassword);
router.post('/logout', authController.logout);

// Rutas protegidas
router.get('/me', authenticate, authController.getMe); // Obtener datos del usuario actual
router.put('/update', authenticate, authController.updateUser); // Actualizar perfil
router.put('/update-avatar', authenticate, authController.updateAvatar); // Actualizar avatar
router.put('/update-banner', authenticate, authController.updateBanner); // Actualizar banner
router.post('/add-certification', authenticate, authController.addCertification); // Agregar certificación
router.post('/add-project', authenticate, authController.addCollaborativeProject); // Agregar proyecto colaborativo

module.exports = router;
