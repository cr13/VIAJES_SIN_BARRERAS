var express = require('express');
var router = express.Router();

/*var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
*/
/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log($localStorage.getItem("list"));

  res.render('index', { title:" viajes sin barreras" });
});

router.get('/registro', function(req, res, next) {
  res.render('registro');
});

module.exports = router;
