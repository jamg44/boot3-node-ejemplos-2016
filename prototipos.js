"use strict";

function Persona(name) {
    this.name = name;
}

var persona = new Persona('Neo');

// asigno metodo a todas las personas
Persona.prototype.saluda = function() {
    console.log("Hola me llamo " + this.name);
};

persona.saluda();

// Herencia de Persona

function Agente(name) {
    Persona.call(this, name);
    // ejecuto el constructor de Persona sobre mi mismo
}

Agente.prototype = new Persona('soy un prototipo');

// creo agentes que heredan de Persona

var agente = new Agente('Smith');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);