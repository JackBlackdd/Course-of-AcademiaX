/**
 * eL Ámbito u 'Scope' se refiere a como estan declaradas 
 * las variables en una funcion
 */

let numero = 5;

function ejemplo() {
    numero = 10;
    console.log(numero);
}

// ejemplo();
// console.log(numero);

// La variable de numero tiene 2 entradas, por lo que se sobreescribe

/* La forma correcta de manejar variables es mantenerlas 
dentro de funciones de forma local y usar diferentes nombres de variables */