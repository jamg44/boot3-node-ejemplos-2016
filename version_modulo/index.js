"use strict";

// cargar librerias
var fs = require('fs');
var path = require('path');

function versionModulo(moduleName, callback) {
    var fichero = path.join('./node_modules', moduleName, 'package.json');
    console.log(fichero);

    // leer el package.json
    fs.readFile(fichero, (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        // parsear el fichero
        try {
            var packageJson = JSON.parse(data);
        } catch (e) {
            callback('No se pude entender el formato del fichero ' + fichero);
            return;
        }

        // obtener version
        callback(null, packageJson.version);
    });
}

// ----- llamada a la funcion
versionModulo('chance', function(err, version) {
    if (err) {
        console.log('Hubo un error', err);
        return;
    }
    console.log('La version de chance es', version);
});