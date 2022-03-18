// Tambien podemos crear metodos en un constructor de la siguiente manera

function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

// La forma actual en la que se crean objetos rapidamente con esta plantilla
// es mediante 'prototype'

Auto.prototype.info = function() {
    return this.modelo + " - " + this.marca + " - " + this.año;
}; // 'Prototype' permite la herencia entre objetos

const auto1 = new Auto('Modelo 10', 2021, 'Tokiomoto');
const auto2 = new Auto('Modelo 7', 2221, 'Emprendum');


console.log(auto1.info());
console.log(auto2.info());