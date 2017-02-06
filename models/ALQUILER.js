/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ALQUILER', {
    ID_ALQUILER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_PROGRAMACION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PROGRAMACION',
        key: 'ID_PROGRAMACION'
      }
    },
    ID_HAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HABITACIONES',
        key: 'ID_HAB'
      }
    },
    ID_COMPRA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'COMPRAS',
        key: 'ID_COMPRA'
      }
    },
    ID_USUARIO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRECIO_ENTRADA: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'ALQUILER',
    timestamps: false
  });
};
