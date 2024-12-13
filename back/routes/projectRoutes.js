const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Rutas de proyectos
router.post('/create', projectController.createProject);
router.get('/user-projects', projectController.getProjects);

module.exports = router;
