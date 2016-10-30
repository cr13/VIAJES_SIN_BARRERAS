/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FORMAS_PAGO', {
    ID_FORMA_PAGO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BORRADO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'FORMAS_PAGO'
  });
};
