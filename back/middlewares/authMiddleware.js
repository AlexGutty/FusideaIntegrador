const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token =
    req.headers.authorization?.split(' ')[1] || req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // Agrega el ID del usuario al request
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error);
    res.status(403).json({ error: 'Token no válido o expirado' });
  }
};

module.exports = { authenticate };
