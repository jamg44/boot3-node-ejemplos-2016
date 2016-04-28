"use strict";

// devolver una promesa que se completará cuando pase un tiempo
function espera(milis) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('ok');
        }, milis);
    });
}

var promesa = espera(1000);

promesa.then( (valor) => {
    console.log('Resuelta:', valor);
}).catch((err) => {
    console.log('Error', err);
});
