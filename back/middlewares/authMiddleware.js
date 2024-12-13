const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extrae el token del encabezado

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Agrega la información del usuario al objeto `req`
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token no válido o expirado' });
  }
};

module.exports = authMiddleware;
