const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../models');

// Registrar usuario
const register = async (req, res) => {
  try {
    const { name, last_name, gender, email, password, id_role } = req.body;

    if (!name || !last_name || !gender || !email || !password || !id_role) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      last_name,
      gender,
      email,
      password: hashedPassword,
      id_role,
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente.', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario.', error });
  }
};

// Iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Correo y contraseña son obligatorios.' });
    }

    const user = await User.findOne({
      where: { email },
      include: [{ model: Role, as: 'Role', attributes: ['name', 'description'] }],
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }

    const token = jwt.sign(
      { id_user: user.id_user, email: user.email, role: user.Role.name },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Inicio de sesión exitoso.',
      token,
      user: {
        id: user.id_user,
        name: user.name,
        email: user.email,
        role: user.Role.name,
        description: user.Role.description,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión.', error });
  }
};

module.exports = {
  register,
  login,
};
