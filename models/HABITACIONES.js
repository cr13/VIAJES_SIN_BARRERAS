/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HABITACIONES', {
    ID_HAB: {
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
    ID_TIPO_HAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TIPO_HAB',
        key: 'ID_TIPO_HAB'
      }
    },
    PRECIO_HAB: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    AFORO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    FOTO_HABITACION: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'HABITACIONES'
  });
};
