// Ya conoces los tipos de datos mayormentes utilizados, los primitivos

// Tipos de datos primitivos

let texto = 'this';
let numero = 0;
let boolean = false;
let indifinido; // Undefined

// No muy utilizados

let bigInt = BigInt(1234278126347812368712637);
let symbol = Symbol('Symbol');

// Tipos de datos estructurales

let objeto = { 0: 'Xavier' }; // Object -> objeto[0] new object():
let lista = ['Xavier']; // Array -> lista[0] new Array():
let regex = /asd/; // new RegExp();

// Object, Array, Map, Set, WeakMap, WeakSet, Date, RegExp

let funcion = function() {};

let nulo = null;

console.log('Texto es: ' + typeof texto);
console.log('Numero es: ' + typeof numero);
console.log('Boolean es: ' + typeof boolean);
console.log('Indifinido es: ' + typeof indifinido);
console.log('BigInt es: ' + typeof bigInt);
console.log('Symbol es: ' + typeof symbol);
console.log('Object es: ' + typeof objecto);
console.log('Lista es: ' + typeof lista);
console.log('Function es: ' + typeof funcion);
console.log('Nulo es: ' + typeof nulo);