const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Rutas de notificaciones
router.get('/', notificationController.getNotifications);

module.exports = router;
