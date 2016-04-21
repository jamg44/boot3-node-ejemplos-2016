"use strict";

var fs = require('fs');
var path = require('path');
var async = require('async');
var versionModulo = require('./versionModulo.js');

/**
 * @function versionModulos
 * @description A function to get version of all locally installed modules
 * @param {function} Callback Callback to return (err, modulesArray)
 */
var versionModulos = function(callBackGeneral) {
	
	var ruta_modulos = './node_modules';

	// leer directorios

	fs.readdir(ruta_modulos, function(err, lista) {

		// https://github.com/caolan/async#concat
		// probar async.concatSeries(lista, 
		async.concat(lista, 

			function iterador(module, callBackSiguiente) {

				// es un fichero/carpeta oculto, lo descarto
				if (module[0] === '.') {
					async.setImmediate(function () {
				      	callBackSiguiente(null); // error: null, item: null
				    });
					return;
				}

				var fileWithPath = path.join(ruta_modulos, module);

				// si no es una carpeta, lo descarto
				if (!fs.statSync(fileWithPath).isDirectory()) {
					async.setImmediate(function () {
						callBackSiguiente( null); // error: null, item: null
					});
					return;
				}

				// averiguo su version y la devuelvo
				versionModulo(module, function(err, version) {
					if (err) {
						callBackSiguiente(err);
						return;
					}
					callBackSiguiente(null, {modulo: module, version: version});
				})

			}, 

			// cuando han terminado todos...
			function finalizador(err, modulos){
				if (err) {
					callBackGeneral(err);
					return;
				}
				callBackGeneral(err, modulos);
			}
		);
	});

};

module.exports = versionModulos;