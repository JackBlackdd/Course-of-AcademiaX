const fs = require("fs");

fs.readdir(__dirname, (error, archivos) => {
  if (error) { return console.log(error); }
  console.log(archivos);
});

console.log("Leyendo archivos en el directorio...");
