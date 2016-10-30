/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_HAB', {
    ID_TIPO_HAB: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'TIPO_HAB'
  });
};
