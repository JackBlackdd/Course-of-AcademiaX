// Cambiar nombre

// const fs = require("fs");

// fs.rename("../nuevo.txt", "./texto-de-js.js", error => {
//   if (error) { return console.log(error); }
//   console.log("Renombrado!");
// });
// console.log("Renombrando...");


// Mover

const fs = require("fs");

fs.rename("./texto-de-js.js", "./nuevo/texto-de-js.js", error => {
  if (error) { return console.log(error); }
  console.log("Movido!");
});
console.log("Moviendo...");