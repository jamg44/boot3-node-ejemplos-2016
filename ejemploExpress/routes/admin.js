"use strict";

var espress = require('express');
var router = espress.Router();

var auth = require('../lib/auth');

router.get('/', auth('12345'), function(req, res) {
    res.send('raiz de admin');
});

// regexp: solo numeros de 0 a 9
router.get('/:identificador([0-9]+)', function(req, res) {
    console.log('req.params', req.params);
    console.log('req.query', req.query);
    res.send('zona de admin del usuario ' + req.params.identificador);
});

// ejemplo multiples params
router.get('/:identificador([0-9]+)/piso/:piso(A|B|C)', function(req, res) {
    res.send('zona de admin del usuario ' + req.params.identificador
        + ' piso ' + req.params.piso);
});

// llamar con Postman!
router.post('/', function(req, res) {
    console.log('req.body', req.body);
    res.send('body leido');
});

module.exports = router;