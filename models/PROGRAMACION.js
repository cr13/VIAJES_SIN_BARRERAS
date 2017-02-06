/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PROGRAMACION', {
    ID_PROGRAMACION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDHOTEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HOTELES',
        key: 'IDHOTEL'
      }
    },
    ID_EVENTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EVENTOS',
        key: 'ID_EVENTO'
      }
    },
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FECHA_SALIDA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PRECIO: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'PROGRAMACION',
    timestamps: false
  });
};
