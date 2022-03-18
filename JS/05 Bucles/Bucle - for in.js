/**
 * For in esta dedicado para objetos
 */
let traductor = {
    bucle: 'loop',
    lista: 'array',
    declaración: 'declaration',
    objeto: 'object'
};

// for (let etiqueta in traductor) {
//     console.log(etiqueta);
// }

for (let etiqueta in traductor) {
    console.log(etiqueta + ' en inglés es ' + traductor[etiqueta]);
}