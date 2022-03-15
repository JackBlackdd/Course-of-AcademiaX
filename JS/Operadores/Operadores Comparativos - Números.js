let diez = 10;
let once = 10;

// JavaScript es un lenguaje "debilmente tipado"
// Por lo que javascrip no tiene problemas de modificar una variable a otro tipo

once = "once";

// LENGUAJE TIPADO
console.log(diez == once);


// El comparador de "!=" se puede usar para no discriminar entre tipos usando un solo "=" en cambio al usar 2 "!=="

diezTexto = "10";

console.log(diez !== diezTexto); // No discrimina entre tipos por lo que es "true"
console.log(diez != diez); //


// Otro tipo de comparadores son los "<" o ">"

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);