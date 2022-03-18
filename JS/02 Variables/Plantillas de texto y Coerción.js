let texto1 = 'Texto entre comillas simples';
let texto2 = "Texto entre comillas simples";

let plantilla = "(Esto es un plantillas literal)";
let texto3 = `texto entre acentos graves ${plantilla}`;
console.log(texto3);

let objeto = new String('primitivo');
console.log(objeto);

console.log('primitivo'.toLocaleUpperCase());

/**
 * Un texto primitivo no tiene metodos, sin embargo se le puedes "añadir" mediante la cohercion, pasandolo por el constructor
 */

console.log(typeof texto1);
console.log(typeof objeto);