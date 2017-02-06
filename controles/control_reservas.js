var sequelize = require('../public/javascripts/sec.js');
var Sequelize = require('sequelize');
var tipo_hab = require('../models/TIPO_HAB.js');
var evento = require('../models/EVENTOS.js');
var fs = require('fs');

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

//GET - Devuelve los datos de una habitacion dada
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
  	var even = new evento(sequelize,Sequelize);
    console.log('--------------------'+req.body.img+'--------------------');
    var bor=req.body.bor;
    var nom_img=req.body.img;

    if(bor == undefined)
       bor= 'N'
    if(nom_img== 'undefined' || nom_img== '')
      nom_img='nodisponible.png'

    if(nom_img=='Validation Error')
      return res.json(500,{mensaje: 'Formato imagen incorrecto'});
    console.log(JSON.stringify(req.body));

  	even.sync({force: false}).then(function () {
      return	even.create({
          NOMBRE: req.body.nombre,
          DESCRIPCION:req.body.des,
          TIPO_EVENTO:req.body.tpeven,
          FECHA:req.body.fec,
          AFORO:req.body.aforo,
          IMAGEN:nom_img,
          BORRAR:bor
      });
  	}).then(function(){
      res.json(200,{mensaje: 'Nueva actividad insertada'});
  	}).catch(function(error){
  		res.json(501,{mensaje: 'Error al insertar actividad'});
  	});
};

//GET - Devuelve los datos de todos los eventos disponibles
exports.leerActividades = function(req, res) {
  var even = new evento(sequelize,Sequelize);
  even.sync({force: false}).then(function () {
    return even.findAll();
  }).then(function(result){
    return res.json(200,{Eventos_disponibles:result});
    }).catch(function(error) {
      return res.status(500).json({data:error})
    });
};

//GET - Devuelve los datos de un evento
exports.leerActividad = function(req, res) {
  console.log("-------------------------Descripcion evento------------------------------")
  var even = new evento(sequelize,Sequelize);
  var id_e= req.params.id;
  even.sync({force: false}).then(function () {
    return even.findAll({ where: {ID_EVENTO:id_e} });
  }).then(function(result){
      return res.json(200,{Datos_evento:result});
    }).catch(function(error) {
      return res.status(500).json({data:error})
    });
};
