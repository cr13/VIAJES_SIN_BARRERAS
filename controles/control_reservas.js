var sequelize = require('../public/javascripts/sec.js');
var Sequelize = require('sequelize');
var tipo_hab = require('../models/TIPO_HAB.js');

exports.insertaTipoHAb= function(req, res){
  	var t_hab = new tipo_hab(sequelize,Sequelize);
    console.log(req.body.nombre);
  	t_hab.sync({force: false}).then(function () {
      return	t_hab.create({
          NOMBRE: req.body.nombre,
          BORRADO: req.body.bor
      });
  	}).then(function(){
  		res.json({ message: 'ok' });
  	}).catch(function(error){
  		res.json({ message: error });
  	});
};

//GET - Devuelve los datos de todos las habitaciones
exports.findHab = function(req, res) {
  var t_hab = new tipo_hab(sequelize,Sequelize);
  t_hab.sync({force: false}).then(function () {
    return t_hab.findAll();
  }).then(function(result){
    return res.json(200,{Tipo_de_habitaciones:result});
    }).catch(function(error) {
      return res.status(500).json({data:error})
    });
};

//GET - Devuelve los datos de una habitacion
exports.findBytpname = function(req, res) {
  var t_hab = new tipo_hab(sequelize,Sequelize);
  t_hab.sync({force: false}).then(function () {
    return t_hab.findOne({where:{'NOMBRE':req.body.nombre}});
  }).then(function(result){
    return res.json(200,{Tipo_de_habitaciones:result});
    }).catch(function(error) {
      return res.status(500).json({data:error})
    });
};

exports.insertaEvento= function(req, res){
  	var t_hab = new tipo_hab(sequelize,Sequelize);
    console.log(req.body.nombre);
  	t_hab.sync({force: false}).then(function () {
      return	t_hab.create({
          NOM_EVEN: req.body.nombre,
          DESCRIPCION:req.body.des,
          TIPO_EVENTO:req.body.tpeve,
          FECHA:req.body.fec,
          AFORO:req.body.aforo,
          IMAGEN:req.body.img,
          BORRADO: req.body.bor
      });
  	}).then(function(){
  		res.json({ message: 'ok' });
  	}).catch(function(error){
  		res.json({ message: error });
  	});
};
