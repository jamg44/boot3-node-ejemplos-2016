var persona = {
    name: 'Juan',
    surName: 'Lopez',
    printFullName: function(n) {
        console.log(this.name + ' ' + this.surName + n);
    }
};

var persona2 = {
    name: 'Alberto',
    surName: 'Martinez'
};

//persona.printFullName();

// arreglamos this con bind
//setTimeout(persona.printFullName.bind(persona), 2000);

// arreglamos this con call
persona.printFullName.call(persona, 5);

// arreglamos this con apply
persona.printFullName.apply(persona2, [5]);