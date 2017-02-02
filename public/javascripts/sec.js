var Sequelize = require('sequelize');

//var sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/hoteles');
var sequelize = new Sequelize(process.env.DATABASE_URL);
module.exports=sequelize;
