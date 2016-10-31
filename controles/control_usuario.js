var mongoose = require('mongoose');
var modelo_usuario = require('../models/USUARIOS.js');

//GET - Devuelve los datos de todos los usuarios
exports.findAll = function(req, res) {
 modelo_usuario.find(function(err, result) {
   if(err) return res.json(500, { mensaje:err.message});
   if(result.length==0) return res.json(500, { mensaje: 'No hay ningun usuario' });
   res.json(200,result);
 });
};

//GET - Devuelve los datos de un usuario especifico
exports.findByUsername = function(req, res) {
  modelo_usuario.findOne({username:req.params.username},function(err, result){
    if(err) return res.json(500, { mensaje:err.message});
    if(result==null) return res.json(500, { mensaje: 'No hay ningun usuario con ese username' });
    res.json(200,result);
  });

};

//POST - Insertar nuevo usuario
exports.add = function(req, res) {
 var usu = new modelo_usuario({
   name: req.body.name,
   username: req.body.username,
   password: req.body.passwords,
   email: req.body.email,
   DNI: req.body.dni
 });

 usu.save(function(err, result) {
   if(err) return res.json(500,{mensaje: 'El usuario ya esta registrado'});
   res.json(200,result);
 });
};

//PUT - Actualiza usuario
exports.actualizar = function(req, res) {
  modelo_usuario.findOne({username: req.params.username},function(err,usu){
    if(err) return res.json(501, { mensaje:err.message});
    if(usu==null) return res.json(502, { mensaje: 'No hay ningun usuario con ese username' });
    if(req.body.name)usu.name=req.body.name;
    if(req.body.passwords)usu.password=req.body.passwords;
    if(req.body.email)usu.email=req.body.email;
    if(req.body.dni)usu.DNI=req.body.dni;
    usu.save(function(err,result){
      if(err) return res.json(503,{mensaje:'Error al actualizar los datos del usuario'});
      res.json(200,{mensaje: 'El usuario ha sido actualizado'});
    });

  });


};

//DELETE - Elimina a un usuario
exports.eliminar = function(req, res) {
  //console.log(req.params);
  modelo_usuario.remove({DNI:req.params.dni},function(err, result) {
    //console.log(err);
    //console.log(result);
    if(err) return res.json(500,{mensaje:'El DNI no se encuentra en el sistema'});
    res.json(200,{mensaje: 'El usuario ha sido eliminado'});
  });



};
//POST - Te confirma si el usuario esta registrado
exports.login = function(req, res) {
  modelo_usuario.findOne({username:req.body.username, password:req.body.passwords},function(err,result){
    if(err) return res.json(500, { mensaje: 'Error en la Base de datos' });
    if(result==null) return res.json(500, { mensaje: 'Necesita registrarse.' });
    res.json(200,{mensaje: 'Inicio de sesión con '+req.body.username});
  });



};
