import jwt from 'jsonwebtoken';

export const generateToken = (userId, expiresIn = '1d') => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn });
};

