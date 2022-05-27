const fs = require("fs");

const texto = `
Este
es
un
simple
archivo
de texto
`;

fs.writeFile("./texto.txt", texto, error => {
  if (error) { return console.log(error); }
  console.log("Guardado!");
});

console.log("Guardando archivo...");
