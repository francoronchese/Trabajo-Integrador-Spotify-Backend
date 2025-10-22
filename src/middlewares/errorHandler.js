const errorHandler = (error, req, res, next) => {
  console.error('❌ Error no manejado:', error);

  res.status(500).json({
    error: 'Error interno del servidor',
    message:
      'Algo salió mal con nuestro servidor. Estamos trabajando para solucionarlo.',
  });
};

module.exports = errorHandler;
