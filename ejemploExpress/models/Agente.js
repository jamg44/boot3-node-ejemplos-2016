"use strict";

var mongoose = require('mongoose');

// Creamos el esquema
var agenteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true // hacemos que el nombre sea requerido
    },
    age: Number
});

// lo asignamos al modelo
mongoose.model('Agente', agenteSchema);
