const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Playlist = sequelize.define(
  'Playlist',
  {
    id_playlist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cant_canciones: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    estado: {
      type: DataTypes.ENUM('activa', 'eliminada'),
      defaultValue: 'activa',
      validate: {
        validarEstadoFecha(value) {
          if (
            (value === 'activa' && this.fecha_eliminada !== null) ||
            (value === 'eliminada' && this.fecha_eliminada === null)
          ) {
            throw new Error('Estado inconsistente con fecha_eliminada');
          }
        },
      },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    fecha_eliminada: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'playlists',
    timestamps: false,
  }
);

module.exports = Playlist;
