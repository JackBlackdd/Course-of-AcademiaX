let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'tesla',
    info: function() {
            return 'Este es un auto ' + this.marca + ' del año ' + this.año +
                ' y el modelo es ' + this.modelo;
        }
        // Podemos crear metodos de un objeto de la manera anterior y luego 
        // usarlos con el 'objeto.metodo'
        //
};
console.log(auto.marca);
console.log(auto.info());


// Tambien se puede manejar de manera inversa referenciando en el objeto el
// metodo

let auto2 = {
    modelo: 'Modelo 1',
    año: 2018,
    marca: 'Toyota',
    info: info
        // Podemos crear metodos de un objeto de la manera anterior y luego 
        // usarlos con el 'objeto.metodo'
        //
};

function info() {
    return 'Este es un auto ' + this.marca + ' del año ' + this.año +
        ' y el modelo es ' + this.modelo;
}

console.log(auto2.info());

// Una tercera de manejar objetos con funciones, es con las funciones flechas
// las cuales tienen una diferencia muy grande en su 'scope' o 'ámbito'

// Primeramente la funcion flecha es la 'declaracion' por lo que para poder utilizar
// la funcion sin prolemas esta se tiene que usar en  el mismo scope donde fue definido o 
// donde fueron creadas 
{
    // Todo fue encapsulado para que veas mejor la idea describida en comparacion con los ejercicios anteriores
    this.modelo = 'modelo 2';

    const info2 = () => {
        return 'Este es un auto ' + this.marca + ' del año ' + this.año +
            ' y el modelo es ' + this.modelo;
    }

    console.log(info2())

}