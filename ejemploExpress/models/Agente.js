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

// Hacer método estático
agenteSchema.statics.list = function(filter, start, limit, sort, cb) {
    var query = Agente.find(filter);
    query.skip(start);
    query.limit(limit);
    query.sort(sort);
    return query.exec(cb);
};

// lo asignamos al modelo
var Agente = mongoose.model('Agente', agenteSchema);
