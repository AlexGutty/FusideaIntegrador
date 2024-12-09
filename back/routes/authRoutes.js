import express from 'express';
import { login, register, passwordRecovery, passwordReset } from '../controllers/authController.js';
import { validateLogin, validateRegister, validatePasswordRecovery, validatePasswordReset } from '../middlewares/validators.js';

const router = express.Router();

router.post('/login', validateLogin, login);
router.post('/register', validateRegister, register);
router.post('/password-recovery', validatePasswordRecovery, passwordRecovery);
router.post('/password-reset', validatePasswordReset, passwordReset);

export default router;

