// Curioso como el texto que se muestra primero es el que se lee de manera síncrona

var fs = require('fs');


fs.readFile('./lorem.txt',function (err,data) {
    if(err){
        console.log(err);
        return;
    }
    console.log("LEIDO EL TEXTO ASYNC:\n \n" + data.toString());
});

console.log("Continuo Async\n");

var data = fs.readFileSync("./lorem.txt");

console.log("LEIDO EL TEXTO SYNC:\n \n" + data.toString());

console.log("Continuo Sync\n");
