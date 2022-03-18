/**  
 * Los callbacks son funciones pasadas como argumentos
 */

// function llamar(callback) {
//     callback(10);
// }

// llamar(console.log);

// function llamar(callback, a) {
//     callback(callback + a);
// }

// llamar(console.log, 200);

function llamar(enExito, enError) {
    exito = true;
    //.....
    if (exito) {
        enExito();
    } else {
        enError();
    }
}

llamar(
    function() { console.log('Exito'); },

    function() { console.log('Error'); }
)