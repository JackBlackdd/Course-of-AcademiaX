// function llamar(enExito, enError) {
//     exito = true;
//     //.....
//     if (exito) {
//         enExito();
//     } else {
//         enError();
//     }
// }

// llamar(
//     () => console.log('Exito'),
//     () => console.log('Error')
// )

[1, 2, 3, 4, 5].forEach((e, i) => { console.log(e, i); });
[1, 2, 3, 4, 5].forEach((e, i) => console.log(e, i));
[1, 2, 3, 4, 5].forEach(console.log);