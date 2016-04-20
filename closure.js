"use strict";

function creaClosure(nombre, nuevaEdad) {
    var edad = nuevaEdad || 20;
    return function() {
        console.log(nombre + ' ' + edad);
    }
}

var unClosure = creaClosure('Juan', 15);
var otroClosure = creaClosure('Alberto');

unClosure();
otroClosure();