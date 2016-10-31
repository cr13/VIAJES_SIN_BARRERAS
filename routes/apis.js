var express = require('express');
var router = express.Router();
var usuarioCtrl= require('../controles/control_usuario');

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

router.route('/usuarios/:DNI')
 .get(usuarioCtrl.findByDNI)
 .put(usuarioCtrl.actualizarByDNI)
 .delete(usuarioCtrl.eliminar);

router.route("/login")
  .post(usuarioCtrl.login);

module.exports = router;
