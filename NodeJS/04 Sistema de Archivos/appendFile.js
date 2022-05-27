const fs = require("fs");

fs.appendFile("./texto.txt", "Nueva línea\n", error => {
  if (error) { return console.log(error); }
  console.log("Guardado!");
});

console.log("Guardando...");
