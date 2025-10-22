const express = require('express');
const allRoutes = require('./routes/index')
const notFoundRoute = require('./routes/notFoundRoute');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Parseo de JSON
app.use(express.json());

// Rutas
app.use('/api/v1/usuarios', allRoutes);

// Ruta 404
app.use(notFoundRoute);

// Middleware de manejo de errores no manejados anteriormente
app.use(errorHandler);

module.exports = app;
