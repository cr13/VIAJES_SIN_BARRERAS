var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: session.nick });
});

router.get('/registro', function(req, res, next) {
  res.render('registro');
});

module.exports = router;
