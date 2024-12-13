import { body, validationResult } from 'express-validator';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

export const validateRegister = [
  body('id_speciality').isInt().withMessage('Speciality ID must be an integer'),
  body('id_role').isInt().withMessage('Role ID must be an integer'),
  body('name').notEmpty().withMessage('Name is required'),
  body('gender').isIn(['MASCULINO', 'FEMENINO', 'OTRO']).withMessage('Invalid gender'),
  body('last_name').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('phoneNumber').optional().isMobilePhone().withMessage('Please enter a valid phone number'),
  body('aboutname').optional(),
  handleValidationErrors,
];

export const validatePasswordRecovery = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  handleValidationErrors,
];

export const validatePasswordReset = [
  body('token').notEmpty().withMessage('Token is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long'),
  handleValidationErrors,
];

