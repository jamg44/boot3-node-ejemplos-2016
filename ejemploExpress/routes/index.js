var express = require('express');
var router = express.Router();
var suma = require('../lib/suma');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', {
    title: '<b style="color:red;">Express</b>',
    suma: suma(3, 4),
    segundo: new Date().getSeconds(),
    users: [ 'smith', 'jones']
  });

});

module.exports = router;
