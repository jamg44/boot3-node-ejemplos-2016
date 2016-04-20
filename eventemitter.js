"use strict";

var events = require('events');

var emisor = new events.EventEmitter();

emisor.on('llamada de telefono', function (quien) {
    if (quien !== 'madre') {
        console.log('ring ring');
    }
});

emisor.on('llamada de telefono', function () {
    console.log('brrr, brrr');
});

setTimeout(function(){
    emisor.emit('llamada de telefono', 'madre');
}, 2000);
