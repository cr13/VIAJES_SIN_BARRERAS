var express = require('express');
var router = express.Router();

/*var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
*/
/* GET home page. */
router.get('/', function(req, res) {
  //console.log($localStorage.getItem("list"));

  res.render('index', { title:" viajes sin barreras" });
});

router.get('/registro', function(req, res) {
  res.render('registro');
});

router.get('/actividades', function(req, res) {
  res.render('actividades');
});

/*router.get('/masinfo/:id', function(req, res, next) {
  res.render('masinfo');
});
*/
router.get('/masinfo', function(req, res) {
  /*var id_even = req.param('id');
  console.log("//////////////////////////"+req.param('id'));
  console.log(res.render('masinfo', { id: id_even }))
// res.render('masinfo', { id: id_even });*/
  res.render('masinfo');

});
module.exports = router;
