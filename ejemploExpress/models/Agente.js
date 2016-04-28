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

var fs = require('fs');
agenteSchema.statics.listPromise = function() {
    return new Promise(function(resolve, reject) {
        fs.readFile(__dirname + '/../agentesMock.json', 'utf-8', function(err, data) {
            if (err) {
                return reject(err);

            }
            return resolve(JSON.parse(data));
        })
    });
};

// lo asignamos al modelo
var Agente = mongoose.model('Agente', agenteSchema);
