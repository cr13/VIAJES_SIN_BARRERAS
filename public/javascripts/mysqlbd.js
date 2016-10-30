var sequelize = require('./sec.js');
var Sequelize = require('sequelize');
var tipo_hab = require('../../models/TIPO_HAB.js');
//Funcion para conectar a la base de datos
function BD(res){
	this.res=res;
	this.insertaTipoHAb= function( nom, bor){
		var t_hab = new tipo_hab(sequelize,Sequelize);
		t_hab.sync({force: false}).then(function () {
		 	t_hab.create({
			    NOMBRE: nom,
			    BORRADO: bor
		  });

		}).then(function(){
  		res.json({ message: 'ok' });
		}).catch(function(error){
			res.json({ message: 'error' });
		});

	};

};


module.exports = BD;
