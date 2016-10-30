/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMPRAS', {
    ID_COMPRA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_FORMA_PAGO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PRECIO_TOTAL: {
      type: 'DOUBLE',
      allowNull: false
    },
    TRANSACCIONES: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    BORRADO: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'COMPRAS'
  });
};
