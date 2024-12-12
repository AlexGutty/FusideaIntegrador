const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialtyController');

// Obtener todas las specialties
router.get('/', specialtyController.getAllSpecialties);

// Obtener una specialty por ID
router.get('/:id_speciality', specialtyController.getSpecialtyById);

// Crear una nueva specialty
router.post('/', specialtyController.createSpecialty);

// Actualizar una specialty
router.put('/:id_speciality', specialtyController.updateSpecialty);

// Eliminar una specialty
router.delete('/:id_speciality', specialtyController.deleteSpecialty);

module.exports = router;
