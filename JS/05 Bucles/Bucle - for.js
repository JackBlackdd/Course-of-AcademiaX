/**
 * For esta dedicado para listas con un indice
 */

for (let i = 0; i < 100; i++) {
    console.log(i);
}

let listaAnimales = ['gato', 'perro', 'elefante', 'dinosaurio', 'tortuga'];

for (let i = 0; i < listaAnimales.length; i++) {
    console.log(listaAnimales[i]);
}

for (let i = 0; i < listaAnimales.length; i++) {
    let animal = listaAnimales[i];
    // console.log(animal + ' es un animal');
    if (animal === 'dinosaurio') {
        console.log(animal + 'es un animal extinto');
    } else {
        console.log(animal + ' es un animal');
    }
}