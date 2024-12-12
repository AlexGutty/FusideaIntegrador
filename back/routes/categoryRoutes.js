const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Obtener todas las categorías
router.get('/', categoryController.getAllCategories);

// Obtener una categoría por ID
router.get('/:id_category', categoryController.getCategoryById);

// Crear una nueva categoría
router.post('/', categoryController.createCategory);

// Actualizar una categoría
router.put('/:id_category', categoryController.updateCategory);

// Eliminar una categoría
router.delete('/:id_category', categoryController.deleteCategory);

module.exports = router;
