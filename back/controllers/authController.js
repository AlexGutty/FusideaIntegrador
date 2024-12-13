const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/tokenService');

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;

    // Encripta la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    const user = await User.create({ email: email.trim().toLowerCase(), password: hashedPassword, ...rest });

    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  const { email, password } = req.body;

  console.log('Datos recibidos en /login:', { email, password });

  if (!email || !password) {
    return res.status(400).json({ error: 'El correo y la contraseña son obligatorios' });
  }

  try {
    // Busca el usuario por correo
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    console.log('Usuario encontrado:', user);

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' }); // Usuario no encontrado
    }

    // Verifica si la contraseña es correcta
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log('¿Contraseña válida?:', isPasswordCorrect);

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Credenciales incorrectas' }); // Contraseña incorrecta
    }

    // Genera un token JWT
    const token = generateToken(user._id);

    // Configura una cookie segura con el token
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
      sameSite: 'strict', // Protege contra CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 día
    });

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

// Recuperación de contraseña
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Busca el usuario por correo
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Genera un token de recuperación (JWT)
    const resetToken = generateToken(user._id, '1h');

    // Aquí deberías enviar un correo con el token al usuario (pendiente de implementación)
    console.log('Token de recuperación generado:', resetToken);

    res.status(200).json({ message: 'Instrucciones enviadas a tu correo', resetToken });
  } catch (error) {
    console.error('Error al recuperar contraseña:', error);
    res.status(500).json({ error: 'Error al recuperar contraseña' });
  }
};

// Cerrar sesión
exports.logout = (req, res) => {
  // Elimina la cookie que contiene el token
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  res.status(200).json({ message: 'Sesión cerrada exitosamente' });
};
