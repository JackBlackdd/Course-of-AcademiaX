function sumar(a, b) {
    console.log(a + b);
}

console.log(sumar(2, 5));

let usuario = {
    nombre: "Jason",
    apellido: "Barcelo",
};

/* Es una buena practica no modificar los objetos originales, 
en lugar de eso retornar copias de los valores para mejorar el codigo */

function cambiarApellido(objeto) {
    let copia = JSON.parse(JSON.stringify(objeto));
    copia.apellido = "Ochoa";
    return copia;
}

console.log(usuario);
console.log(cambiarApellido(usuario));