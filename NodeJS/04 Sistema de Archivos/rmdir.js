const fs = require("fs");

fs.rmdir("./nuevo", error => {
  if (error) { return console.log(error); }
  console.log("Borrado!");
});
console.log("Borrando directorio...");