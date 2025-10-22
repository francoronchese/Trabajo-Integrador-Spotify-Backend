const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Album = sequelize.define(
  'Album',
  {
    id_album: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    id_artista: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_discografica: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagen_portada: {
      type: DataTypes.STRING(255),
    },
    anio_publicacion: {
      type: DataTypes.SMALLINT,
    },
    duracion_total_seg: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: 'albumes',
    timestamps: false,
  }
);

module.exports = Album;
