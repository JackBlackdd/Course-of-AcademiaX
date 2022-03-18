// Funcion sencilla

let a, b;

function sumar(a, b) {
    return a + b;
}

console.log(sumar(3, 5));

// Funcion solo pasando argumentos con 'arguments'

function sumarNumeros() {
    let total = 0;
    for (let elemt of arguments) {
        total += elemt;
    }
    return total;
}

console.log(sumarNumeros(197, 435, 571, 356, 22, 656, 523, 123));