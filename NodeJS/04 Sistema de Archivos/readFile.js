const fs = require("fs");
const path = require("path");

let archivo = path.join(__dirname, '../texto.md');
fs.readFile(archivo, 'utf-8', (error, texto) => {
  if (error) { return console.log(error); }
  console.log(texto);
});

console.log("Leyendo archivo...");
