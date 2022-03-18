/** 
 * Los metodos son objetos y tienen diferentes funciones dependiendo del 
 * elemento
 */
console.log(3); // Esto es un metodo
let texto = 'hola';
console.log(texto.toUpperCase()); // Esto es un metodo

// se pueden crear metodos propios de la siguiente manera 

let perro = {
    nombre: 'Marco',
    ladra: function() {
        console.log('Woof!"');
    }
};

perro.ladra();