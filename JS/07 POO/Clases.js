// function Auto(modelo, año, marca) {
//     this.modelo = modelo;
//     this.año = año;
//     this.marca = marca;
// }
// Auto.prototype.info = function() {
//     return this.modelo + " - " + this.marca + " - " + this.año;
// };

//* Una forma de hacer el proceso anterior mas rapido es con clases

class Auto {
    constructor(modelo, año, marca) {
        this.modelo = modelo;
        this.año = año;
        this.marca = marca;
    }
    info() {
        return this.modelo + " - " + this.marca + " - " + this.año;
    }
}

const auto1 = new Auto('Modelo 10', 2021, 'Tokiomoto');
const auto2 = new Auto('Modelo 7', 2221, 'Emprendum');


console.log(auto1.info());
console.log(auto2.info());