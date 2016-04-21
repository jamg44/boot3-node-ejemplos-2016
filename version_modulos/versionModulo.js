"use strict";

var fs = require('fs');
var path = require('path');

/**
 * @function versionModulo
 * @description A function to get version of a locally installed module
 * @param {string} moduleName The module name
 * @param {function} Callback Callback to return (err, moduleVersionStr)
 */
var versionModulo = function(moduleName, callBack) {

	var fichero = path.join('./node_modules', moduleName, 'package.json');
	var encoding = {encoding:'utf8'}; // Encodings: https://nodejs.org/api/buffer.html

	fs.readFile( fichero, encoding, function(err, data) {
	  	if (err) {
	  		callBack(err);
	  		return;
	  	}

		var packageJson = {};
		try {
			packageJson = JSON.parse(data); // si hay error JSON lanza excepción
		} catch (err) {
			callBack(new Error('No se puedo parsear ' + fichero + ' - ' + err.message));
			return;
		}

  		// tiene etiqueta version?
  		if (!packageJson.version) {
			callBack('no se encuentra etiqueta "version" en '+ fichero);
			return;
  		}

		callBack(null, packageJson.version);

	});
};

module.exports = versionModulo;