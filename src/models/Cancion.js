const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cancion = sequelize.define(
  'Cancion',
  {
    id_cancion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    duracion_seg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_album: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reproducciones: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    likes: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    fecha_agregada: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'canciones',
    timestamps: false,
  }
);

module.exports = Cancion;
