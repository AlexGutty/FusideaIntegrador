const protectedController = (req, res) => {
    res.status(200).json({ message: 'Ruta protegida accedida exitosamente', user: req.user });
  };
  
  module.exports = protectedController;
  