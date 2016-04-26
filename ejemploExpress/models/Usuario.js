"use strict";

var mongoose = require('mongoose');

// Creamos el esquema
var usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, // hacemos que el nombre sea requerido
        index: true
    },
    pass: String
});

// lo asignamos al modelo
var Usuario = mongoose.model('Usuario', usuarioSchema);
