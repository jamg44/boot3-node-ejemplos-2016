"use strict";

function creaAgente(nombre) {
    var edad = 0;
    return {
        ponNombre: function(nuevoNombre) {
            nombre = nuevoNombre;
        },
        leeNombre: function() {
            console.log('mi nombre es ' + nombre);
            return nombre;
        },
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function() {
            return edad;
        }
    }
}

var agente = creaAgente('Smith');

console.log(agente.leeNombre());

setTimeout(agente.leeNombre, 1000);