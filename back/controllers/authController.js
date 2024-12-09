import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/db.js';
import { sendPasswordRecoveryEmail } from '../utils/emailService.js';
import { generateToken } from '../utils/tokenService.js';
import { logger } from '../utils/logger.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user.id_user);
    res.json({ token, user: { id: user.id_user, name: user.name, email: user.email } });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};

export const register = async (req, res) => {
  try {
    const { id_speciality, id_role, name, gender, last_name, email, password, phoneNumber, aboutname } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      'INSERT INTO users (id_speciality, id_role, name, gender, last_name, email, password, phoneNumber, aboutname) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id_speciality, id_role, name, gender, last_name, email, hashedPassword, phoneNumber, aboutname]
    );

    const userId = result.insertId;
    const token = generateToken(userId);

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    logger.error('Registration error:', error);
    res.status(500).json({ message: 'An error occurred during registration' });
  }
};

export const passwordRecovery = async (req, res) => {
  try {
    const { email } = req.body;
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];
    const token = generateToken(user.id_user, '1h');

    await db.query('UPDATE users SET password_token = ? WHERE id_user = ?', [token, user.id_user]);

    await sendPasswordRecoveryEmail(email, token);

    res.json({ message: 'Password recovery email sent' });
  } catch (error) {
    logger.error('Password recovery error:', error);
    res.status(500).json({ message: 'An error occurred during password recovery' });
  }
};

export const passwordReset = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const [rows] = await db.query('SELECT * FROM users WHERE id_user = ? AND password_token = ?', [decodedToken.userId, token]);

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const user = rows[0];
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.query('UPDATE users SET password = ?, password_token = NULL WHERE id_user = ?', [hashedPassword, user.id_user]);

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    logger.error('Password reset error:', error);
    res.status(500).json({ message: 'An error occurred during password reset' });
  }
};

