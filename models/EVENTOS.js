/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EVENTOS', {
    ID_EVENTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TIPO_EVENTO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BORRAR: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    },
    IMAGEN: {
      type: DataTypes.CHAR(60),
      allowNull: true
    }
  }, {
    tableName: 'EVENTOS'
  });
};
