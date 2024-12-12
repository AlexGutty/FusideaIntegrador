const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// Obtener todos los roles
router.get('/', roleController.getAllRoles);

// Obtener un rol por ID
router.get('/:id_role', roleController.getRoleById);

// Crear un nuevo rol
router.post('/', roleController.createRole);

// Actualizar un rol
router.put('/:id_role', roleController.updateRole);

// Eliminar un rol
router.delete('/:id_role', roleController.deleteRole);

module.exports = router;
