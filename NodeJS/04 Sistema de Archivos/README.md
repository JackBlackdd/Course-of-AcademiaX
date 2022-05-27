# Notas Masterclass NodeJs

## Sistema de Archivos

### readdir

`.readdir` es un metodo para leer todos los archivos de un directorio de la carpeta señalada.


__Ejemplo:__ 
~~~
const fs = require("fs");

fs.readdir(__dirname, (error, archivos) => {
  if (error) { return console.log(error); }
  console.log(archivos);
});

console.log("Leyendo archivos en el directorio...");
~~~

### mkdir

`.mkdir` es un metodo para la creacion de carpetas y directorios en el sistema.

__Ejemplo:__
~~~
const fs = require("fs");

const existe = fs.existsSync("nuevo");

if (!existe) {
  fs.mkdir("./nuevo", error => {
    if (error) { return console.log(error); }
    console.log("Creado!");
  });
  console.log("Creando directorio...");
}
~~~

### writeFile

`.writeFile` es un metodo para crear archivos de texto.

__Ejemplo:__
~~~
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
~~~

### appendChild

`.appendChild` es un metodo para modificar archivos de texto ya creados.

__Ejemplo:__
~~~
const fs = require("fs");

fs.appendFile("./texto.txt", "Nueva línea\n", error => {
  if (error) { return console.log(error); }
  console.log("Guardado!");
});

console.log("Guardando...");
~~~

### streams

`.streams` es un metodo para capturar *streams* un stream es un rio de eventos, los streams pueden ser multiples eventos al mismo tiempo, para ello estamos metodos como `.createReadStream` y `.createWriteStream`, para ello usamos tambien del metodo *path* para hacer un archivo de texto apartir de escuchar la creacion de otro.

__Ejemplo:__
~~~
const fs = require("fs");
const path = require("path");

let lorem = path.join(__dirname, '../lorem.txt');
let nuevo = path.join(__dirname, '../nuevo.txt');
const streamLeer = fs.createReadStream(lorem, 'utf-8');
const streamEscribir = fs.createWriteStream(nuevo, 'utf-8');

streamLeer.on('data', data => {
    console.log('datos : ', data);
    streamEscribir.write(data);
});

// process.stdin.on('data', data => {
//     console.log('datos : ', data);
//     process.stdout.write(data);
// });
~~~

### readFile

`.readFile` es un metodo para leer archivos y el contenido de los mismos.

__Ejemplo:__
~~~
const fs = require("fs");
const path = require("path");

let archivo = path.join(__dirname, '../texto.txt');
fs.readFile(archivo, 'utf-8', (error, texto) => {
  if (error) { return console.log(error); }
  console.log(texto);
});

console.log("Leyendo archivo...");
~~~

### rename

`.rename` es un metodo para cambiar el nombre de los archivos ya creados, tambien podemos mover los archivos con el mismo metodo.

__Ejemplo:__
~~~
const fs = require("fs");

fs.rename("./texto.txt", "./texto-de-js.js", error => {
  if (error) { return console.log(error); }
  console.log("Renombrado!");
});
console.log("Renombrando...");




const fs = require("fs");

fs.rename("./texto-de-js.js", "./nuevo/texto-de-js.js", error => {
  if (error) { return console.log(error); }
  console.log("Movido!");
});
console.log("Moviendo...");
~~~

### unlink

`.unlink` es un metodo para borrar archivos

__Ejemplo:__
~~~
const fs = require("fs");

fs.unlink("./nuevo/texto-de-js.js", error => {
  if (error) { return console.log(error); }
  console.log("Borrado!");
});
console.log("Borrando...");
~~~

### removeDir

`.rmdir` es un metodo para carpetas o directorios

__Ejemplo:__
~~~
const fs = require("fs");

fs.rmdir("./nuevo", error => {
  if (error) { return console.log(error); }
  console.log("Borrado!");
});
console.log("Borrando directorio...");
~~~

### Documentacion

Módulo fs:

https://nodejs.org/dist/latest/docs/api/fs.html

Stack Overflow:

https://stackoverflow.com/