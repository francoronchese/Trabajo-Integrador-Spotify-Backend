const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pago = sequelize.define(
  'Pago',
  {
    id_pago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_suscripcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_metodo_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    importe: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    fecha_pago: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: 'pagos',
    timestamps: false,
  }
);

module.exports = Pago;
