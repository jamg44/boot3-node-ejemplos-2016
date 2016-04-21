"use strict";

console.log('inicializo módulo');

// crear una función
var sumar = function (n1, n2) {
    return n1 + n2;
};

// exportar la función
module.exports = sumar;

// exporto un objeto con la funcion como metodo
//module.exports.suma = sumar;

// equivalente a
//exports.suma = sumar;

// así me cargo el alias y no funciona
//exports = sumar;
