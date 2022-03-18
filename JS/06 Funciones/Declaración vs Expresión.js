// Una funcion declarada funciona en cualquier parte del codigo

console.log(sumar(5, 5)); // Fun

// Declaracion

function sumar(a, b) {
    return a + b;
}

// Expresion

let suma = function(a, b) {
    return a + b;
};

// Una funcion expresada solo funciona despues de la expresion

console.log(suma(5, 5)); // Fun