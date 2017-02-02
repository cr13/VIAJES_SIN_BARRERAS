/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMPRAS', {
    ID_COMPRA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_FORMA_PAGO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FORMAS_PAGO',
        key: 'ID_FORMA_PAGO'
      }
    },
    PRECIO_TOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TRANSACCIONES: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    BORRADO: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'COMPRAS',
    timestamps: false
  });
};
