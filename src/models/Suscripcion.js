const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Suscripcion = sequelize.define(
  'Suscripcion',
  {
    id_suscripcion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_renovacion: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfterFechaInicio(value) {
          if (value <= this.fecha_inicio) {
            throw new Error('fecha_renovacion debe ser mayor que fecha_inicio');
          }
        },
      },
    },
  },
  {
    tableName: 'suscripciones',
    timestamps: false,
  }
);

module.exports = Suscripcion;
