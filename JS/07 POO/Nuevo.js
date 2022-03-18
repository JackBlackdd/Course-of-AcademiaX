let auto1 = {
    modelo: 'modelo 3',
    año: 2101,
    marca: 'Toyota'
};
let auto2 = {
    modelo: 'modelo 1',
    año: 2901,
    marca: 'Asus'
};

function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

let auto3 = new Auto('Modelo 10', 2021, 'Tokiomoto');
let auto4 = new Auto('Modelo 7', 2221, 'Emprendum');
console.log(auto3);
console.log(auto4);