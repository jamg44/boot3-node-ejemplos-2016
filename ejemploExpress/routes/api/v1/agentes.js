"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

router.get('/', function(req, res, next) {
    var name = req.query.name;

    var criteria = {};

    if (typeof name !== 'undefined') {
        criteria.name = name;
    }

    // creo la consulta
    var query = Agente.find(criteria);

    // ordenado por nombre descendente
    query.sort({name: -1});

    // ejecuto la consulta
    query.exec(function(err, rows) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, rows: rows });
    });
});

router.post('/', function(req, res, next) {
    var agente = new Agente(req.body);

    var errors = agente.validateSync();
    if (errors) {
        console.log('errors', errors);
        next(new Error('Hubo errores de validacion'));
        return;
    }

    agente.save(function(err, saved) {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, saved: saved });
    });
});

module.exports = router;
