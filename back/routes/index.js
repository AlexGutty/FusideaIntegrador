const express = require('express');
const router = express.Router();

// Importar rutas
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
const searchRoutes = require('./searchRoutes');
const projectRoutes = require('./projectRoutes');
const chatRoutes = require('./chatRoutes');
const taskRoutes = require('./taskRoutes');
const notificationRoutes = require('./notificationRoutes');
const tradeRoutes = require('./tradeRoutes');
const protectedRoutes = require('./protectedRoutes');


router.use('/api/protected', protectedRoutes);

// Usar rutas
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/search', searchRoutes);
router.use('/projects', projectRoutes);
router.use('/chat', chatRoutes);
router.use('/tasks', taskRoutes);
router.use('/trades', tradeRoutes);
router.use('/notifications', notificationRoutes);


module.exports = router;
