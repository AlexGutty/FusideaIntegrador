// backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();

// Simulamos obtener un usuario desde una base de datos
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  // Aquí deberías usar la lógica para obtener el usuario desde tu base de datos
  const user = {
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/path/to/avatar.jpg',
    banner: '/path/to/banner.jpg',
    certifications: ['Certificado A', 'Certificado B'],
    collaborativeProjects: ['Proyecto X', 'Proyecto Y']
  };

  res.json(user);
});

module.exports = router;
