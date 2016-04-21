"use strict";

var versionModulos = require('./versionModulos.js');

versionModulos(function(err, modulesArr) {
	if (err) {
		console.error('Hubo un error: ', err);
		return;
	}
	console.log('Las versiones son:');

	// la construcción array.forEach, aunque lo parezca, no es asíncrona!
	// fijaros que 'Terminado' se ejecuta después
	modulesArr.forEach(function(item) {
		console.log('\t', item.modulo, item.version);
	});
	console.log('Terminado')
});
