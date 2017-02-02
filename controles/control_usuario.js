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

//GET - Devuelve los datos de un usuario según el nick
exports.findByUsername = function(req, res) {
  modelo_usuario.findOne({username:req.params.username},function(err, result){
    if(err) return res.json(500, { mensaje:err.message});
    if(result==null) return res.json(500, { mensaje: 'No hay ningun usuario con ese username' });
    res.json(200,result);
  });

};

//GET - Devuelve los datos de un usuario según el DNI
exports.findByDNI = function(req, res) {
  modelo_usuario.findOne({DNI:req.params.DNI},function(err, result){
    if(err) return res.json(500, { mensaje:err.message});
    if(result==null) return res.json(500, { mensaje: 'No hay ningun usuario con ese DNI en el sistema' });
    res.json(200,result);
  });

};

//POST - Insertar nuevo usuario
exports.add = function(req, res) {
  console.log(req.headers)
 var usu = new modelo_usuario({
   name: req.body.name,
   username: req.body.username,
   email: req.body.email,
   DNI: req.body.dni
 });
 usu.setPassword(req.body.passwords);
 usu.save(function(err, result) {
   if(err) return res.json(500,{mensaje: 'El usuario ya esta registrado'});
   var token;
    token = result.generarToken();
    res.status(200);
    res.json({
      "token" : token
    });
 });
};

//PUT - Actualiza usuario por username
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

//PUT - Actualiza usuario
exports.actualizarByDNI = function(req, res) {
  modelo_usuario.findOne({DNI: req.params.DNI},function(err,usu){
    if(err) return res.json(501, { mensaje:err.message});
    if(usu==null) return res.json(502, { mensaje: 'No hay ningun usuario con ese DNI' });
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

//DELETE - Elimina a un usuario por DNI
exports.eliminar = function(req, res) {
  modelo_usuario.remove({DNI:req.params.DNI},function(err, result) {
    if(err) return res.json(500,{mensaje:'El DNI no se encuentra en el sistema'});
    res.json(200,{mensaje: 'El usuario ha sido eliminado'});
  });
};

//DELETE - Elimina a un usuario por username
exports.eliminarBynick = function(req, res) {
  modelo_usuario.remove({username:req.params.username},function(err, result) {
    if(err) return res.json(500,{mensaje:'El username no se encuentra en el sistema'});
    res.json(200,{mensaje: 'El usuario ha sido eliminado'});
  });
};

//POST - Te confirma si el usuario esta registrado
exports.login = function(req, res) {
  modelo_usuario.findOne({username:req.body.username},function(err,result){
    if(err) return res.json(500, { mensaje: 'Error en la Base de datos' });
    if(result==null) return res.json(500, { mensaje: 'Necesita registrarse.' });
    console.log(result)
    var pass=req.body.passwords
    if(result.validPassword(pass)){
        return res.json(200,{'token' : result.generarToken()});
    }res.json(500, { mensaje: 'Contraseña incorrecta.' });
  });
};
/*
  passport.authenticate('local', function(err, user, info){
     var token;

     // Si passport tiene algun error
     if (err) {
       res.status(404).json(err);
       return;
     }

     // Si el usuario existe
     if(user){
       token = user.generarToken();
       res.status(200);
       res.json({
         "token" : token
       });
     } else {
       // Si el usuario no existe
       res.status(401).json(info);
     }
   })(req, res);




};*/
