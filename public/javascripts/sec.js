var Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://root:cr@localhost:3306/hoteles');

module.exports=sequelize;

