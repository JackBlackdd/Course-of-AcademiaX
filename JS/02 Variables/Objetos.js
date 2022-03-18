// Otro tipo de datos en 'js' son los objetos

let objeto = {
    texto: 'Hola',
    numero: 1,
    lista: [],
    Boolean: false,
    objeto: {
        objeto2: 'Hola'
    }
};

console.log(objeto);
console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto['objeto']['objeto2']);

delete objeto['objeto'];
console.log(objeto);

let usuario2 = {
    nombre: 'Jason',
    apellidos: 'Barcelo Ortiz',
    alias: 'Jack'
}

let num1 = 1;
let num2 = num1;
num2 = 3;
console.log(num1, num2);

let usuario = JSON.parse(JSON.stringify(usuario2));
usuario2.alias = 'JackBlack';
console.log(usuario);
console.log(usuario2);