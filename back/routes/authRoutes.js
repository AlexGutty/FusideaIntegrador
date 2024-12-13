const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

// Rutas de autenticación
router.post('/register', authController.register);
router.post('/login', validateRequest(loginSchema), authController.login);
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
