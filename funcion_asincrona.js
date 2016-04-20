"use strict";

console.log('empiezo');

function escribeTras2Segundos(n, callback) {
    setTimeout(function(){
        console.log('texto' + n);
        callback();
    }, 2000);
}

function serie(arr, fn, callbackFin) {
    if (arr.length == 0) {
        callbackFin();
        return;
    }
    fn( arr.shift(), function(){
        serie(arr, fn, callbackFin);
    });
}

serie([1,2,3,4,5], escribeTras2Segundos, function() {
    console.log('termino');
});





