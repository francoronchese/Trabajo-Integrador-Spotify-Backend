const sequelize = require('./src/config/database');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1); //Salida con error
  }
};

startServer();
