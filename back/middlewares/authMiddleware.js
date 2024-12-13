const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Intenta obtener el token desde el encabezado o desde la cookie
  const token =
    req.headers.authorization?.split(' ')[1] || req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  try {
    // Verifica y decodifica el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Agrega la información del usuario al objeto `req` para que esté disponible en las rutas protegidas
    req.user = decoded.userId;

    next();
  } catch (error) {
    console.error('Error al verificar el token:', error);
    res.status(403).json({ error: 'Token no válido o expirado' });
  }
};

module.exports = authMiddleware;
