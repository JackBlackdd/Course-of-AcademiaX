function info(a) {
    console.log(this, a);
}

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'tesla',
    info: info
};
// auto.info();
//? --------------------------------- 
// const info2 = () => {
//     console.log(this);
// }

// let auto2 = {
//     modelo: 'Modelo 3',
//     año: 2021,
//     marca: 'tesla',
//     info: info2
// };
// auto2.info();
//? ---------------------------------
// Vinculacion explicita
// 3 metodor para vinvular metodos con objetos
// bind, call, apply
//? ---------------------------------
// 'bind' funciona para vincular las funciones, pero no corre la funcion

// info.bind(auto)
//? ---------------------------------
// 'call', hace lo mismo que 'bind' pero si corre la funcion.

// info.call(auto, 10); // Permite el paso de argumentos
//? ---------------------------------
// 'apply', es igual que 'call, pero en lugar de argumentos, maneja arrays para mayor cantidad de datos

info.apply(auto, [10, 20, 30]);
//? ---------------------------------