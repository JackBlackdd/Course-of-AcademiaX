/**
 * El ambito de una variable como puede ser let o var hace que sus
 * caracteristicas sean diferentes, la principal diferencia entre estos
 * 2 es que var es una variable de toda una funcion y let de un bloque
 */

// Ejemplo

var numero = 4;

function ejemplo() {
    numero = 10;
    console.log(numero);

    function dentro() {}
    dentro();

    // let numero2 = 2;

    // if (true) {}
    // while (true) {}
    // for (let i in []) {}
    {
        var numero = 100;
        let numero2 = 2;
    }

    var numero = 100;
    let numero2 = 2;

    ejemplo();
    console.log(numero);
    console.log(numero2);
    /* Numero 2 no esta definido porque solo fue 
    inicializado dentro del bloque de la funcion */
}