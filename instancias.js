"use strict";

// Contructor de objetos
function Fruta(nombre) {
    this.nombre = nombre || 'limon';
    this.setNombre = function(valor) {
        this.nombre = valor;
    }
    return {
        setNombre: this.setNombre,
        getNombre: function() { return this.nombre; }
    }
}

// crear un objeto
var fruta = new Fruta();

console.log(fruta.nombre);

fruta.nombre = 'sadfasd';

fruta.setNombre('naranja');

console.log(fruta);

var pera = new Fruta('pera');

console.log(pera);

