/** 
 * While es un premisa principal es ejecutar codigo sin fin, sin saber su final 
 */

// let i = 0;

// while (i <= 100) {
//     console.log(i);
//     i++;
// }

let lista = [5, 6, 1, 12, 64, 23, 65, 186, 52, 65, 7045, 87, 234];

let numero = 0;
while (numero < 200) {
    numero = lista.shift();
    console.log(numero);
}
console.log(lista);