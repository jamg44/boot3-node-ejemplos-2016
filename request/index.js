"use strict";

var request = require('request');

// hacer objeto de opciones
var options = {
    url: 'http://localhost:3000/api/v1/agentes',
    json: true
    //headers: {'User-Agent': '...'},
};


// realizar la llamada
request(options, function(err, response, body) {
    if (err || response.statusCode >= 400) {
        console.log('Error', response.statusCode, err);
        return;
    }
    console.log('lista', body);
});
