/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HABITACIONES', {
    ID_HAB: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDHOTEL: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ID_TIPO_HAB: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PRECIO_HAB: {
      type: 'DOUBLE',
      allowNull: false
    },
    AFORO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'HABITACIONES'
  });
};
