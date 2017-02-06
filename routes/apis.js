var express = require('express');
var router = express.Router();
var usuarioCtrl= require('../controles/control_usuario');
var reservasCtrl= require('../controles/control_reservas');
var jwt = require('express-jwt');

var auth = jwt({
  secret: "UnaClave",
  userProperty: "payload"
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/usuarios')
  .post(usuarioCtrl.add)
  .get(usuarioCtrl.findAll);


router.route('/usuarios/:username')
 .get(usuarioCtrl.findByUsername)
 .put(usuarioCtrl.actualizar)
 //.put(auth,usuarioCtrl.actualizar) //Requiere autentificacion

router.route('/usuarios/:DNI')
 .get(usuarioCtrl.findByDNI)
 .put(usuarioCtrl.actualizarByDNI)
 .delete(usuarioCtrl.eliminar);

router.route("/login")
  .post(usuarioCtrl.login);

router.route("/newHab")
  .post(reservasCtrl.insertaTipoHAb)
  .get(reservasCtrl.findHab)

router.route("/buscarBytpname/:NOMBRE")
  .get(reservasCtrl.findBytpname)

router.route("/newEven")
  .post(reservasCtrl.insertaEvento)
  .get(reservasCtrl.leerActividades)

/*
router.get('/masinfo/:id', function(req, res, next) {
  var id = req.param('id');
  console.log("//////////////////////////"+req.param('id'));
  res.send(id);
});*/

router.route("/masinfo")
  .get(reservasCtrl.leerActividad)
  //.post(reservasCtrl.reservar)

router.route("/masinfo/:id")
  .get(reservasCtrl.leerActividad)
  //.post(reservasCtrl.reservar)

module.exports = router;
