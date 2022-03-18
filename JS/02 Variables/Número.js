// Otro tipo de dato en javascrip son los numeros

let numero = 5;
let decimal = 6.827349827349827;

/* Las 2 variables de arriba son numeros, sin embargo para numeros decimales, 'js' tiene un limite, 
el cual puede ser ampliado con librerias de javascript */

let negativos = -10;
let infinito = Infinity;
let infinitoNegativo = -Infinity;

/*
console.log(numero);
console.log(decimal);
console.log(negativos);
console.log(infinito);
console.log(-infinito);
console.log(NaN);
*/

// Un a libreria para manejar elementos de tipo numerico que viene por defecto en js, es 'Math', puedes usar muchisimos
// metodos de la libreria, como por ejemplo:

console.log(Math.PI); //Invoca el numero PI '3.1416'
console.log(Math.round(decimal)); //Redondea un numero indicado
console.log(Math.random()); //Solicta un numero al azar entre 0 a 1