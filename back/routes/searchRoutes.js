const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Rutas de búsqueda
router.post('/', searchController.search);

module.exports = router;
