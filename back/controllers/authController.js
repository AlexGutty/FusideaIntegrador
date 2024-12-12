const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../models');

// Registrar usuario
const register = async (req, res) => {
  try {
    const { name, last_name, gender, email, password, id_role } = req.body;

    // Validación de campos requeridos
    if (!name || !last_name || !gender || !email || !password || !id_role) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado.' });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = await User.create({
      name,
      last_name,
      gender,
      email,
      password: hashedPassword,
      id_role, // Suponiendo que id_role es el ID del rol que tiene el usuario
    });

    // Responder con el usuario creado
    res.status(201).json({ message: 'Usuario registrado exitosamente.', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar usuario.', error });
  }
};

// Iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validación de campos
    if (!email || !password) {
      return res.status(400).json({ message: 'Correo y contraseña son obligatorios.' });
    }

    // Buscar el usuario por email
    const user = await User.findOne({
      where: { email },
      include: [{ model: Role, as: 'Role', attributes: ['name', 'description'] }],
    });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });
    }

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });
    }

    // Crear un token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.Role.name },
      process.env.JWT_SECRET_KEY, // Asegúrate de tener una clave secreta en tu archivo .env
      { expiresIn: '1h' }
    );

    // Responder con el token y los datos del usuario
    res.status(200).json({
      message: 'Inicio de sesión exitoso.',
      token,
      user: {
        id: user.id,
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender,
        role: user.Role.name,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión.', error });
  }
};

module.exports = { register, login };
