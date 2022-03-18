// Programacion orientada a objetos

let auto1 = {
    modelo: 'Modelo 2',
    año: 2020,
    marca: 'Asus',
};

let auto2 = {
    modelo: 'Modelo 1',
    año: 2018,
    marca: 'Toyota',
};

/** 
 * *La idea de la POO(Programacion orientada a objetos), es que todo lo conviertas a un objeto
 * *No solo tus listas de trabajo
 * */

//? Ejemplo

let servicioX = {
    nombre: 'Transforma modelos a mayusculas',
    transformar: function(auto) {
        auto.marca = auto.marca.toUpperCase();
    }
};

servicioX.transformar(auto2);
console.log(auto2);